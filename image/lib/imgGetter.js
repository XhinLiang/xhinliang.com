'use strict';
const spidex = require("spidex");
const path = require("path");
const fs = require("fs");
const URL = require("url");
const redis = require("redis");
const redisClient = redis.createClient();
const base = 'download';

function getSaveFile() {
    let tmpYear = 0;
    let tmpMonth = 0;
    let tmpIndex = 0;

    return function(year, month, filename, buf, url, callback) {
        if (tmpYear != year || tmpMonth != month) {
            tmpIndex = 0;
            tmpYear = year;
            tmpMonth = month;
        } else {
            tmpIndex++;
        }
        let fullname = `${base}/${year}_${month}_${tmpIndex}.jpg`;
        fs.writeFile(fullname, buf, {
            encoding: "binary"
        }, callback);
    }
}

function getSaveRedis() {
    return function(year, month, filename, buf, url, callback) {
        redisClient.sadd('xhinliang_lofter', url, redis.print);
        callback(null);
    }
}

let saveFile = getSaveFile();
let saveRedis = getSaveRedis();
let saveImage;
switch (process.argv[1]) {
    case '--file':
        saveImage = saveFile;
        break;
    case '--all':
        saveImage = function(year, month, filename, buf, url, callback) {
            saveFile(year, month, filename, buf, url, callback);
            saveRedis(year, month, filename, buf, url, callback);
        };
    case '--redis':
    default:
        saveImage = saveRedis;
        break;
}


function get(task) {
    var year = task.task.year;
    var month = task.task.month;
    var url = task.task.url;
    var filename = path.basename(url);

    var host = URL.parse(url).hostname;
    spidex.get(url, {
        charset: "binary",
        header: {
            "accept": "image/webp,*/*;q=0.8",
            "accept-language": "zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4,sv;q=0.2,zh-TW;q=0.2",
            "cache-control": "max-age=0",
            "connection": "keep-alive",
            "host": host,
            "referer": task.task.referer,
            "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"
        }
    }, function(html, status) {
        if (status !== 200) {
            console.log("× 抓取图片 [" + filename + "] 失败：服务器返回错误状态码.");

            // 重新push
            task.task.queue.push(task.task, get);
            task.task.queue.taskDone(task);
            return;
        }

        // 如果文件存在就不写了
        if (fs.existsSync(base + year + "/" + month + "/" + filename)) {
            console.log("○ 图片 " + year + month + " [" + filename + "] 存在，不重复抓取。");
            task.task.queue.taskDone(task, true);
            return;
        }

        saveImage(year, month, filename, html, url, function(err) {
            if (err) {
                console.log("× 写入图片 " + year + month + " [" + filename + "] 失败：" + err.message);

                // 重新push
                task.task.queue.push(task.task, get);

                task.task.queue.taskDone(task, true);
                return;
            }

            console.log("√ 写入图片 " + year + month + " [" + filename + "] 成功.");
            task.task.queue.taskDone(task, true);
        });
    }).on("error", function(err) {
        console.log("× 抓取图片 " + year + month + " [" + filename + "] 失败：" + err.message);

        // 重新push
        task.task.queue.push(task.task, get);
        task.task.queue.taskDone(task, true);
    });
}

exports.get = get;
