'use strict';
const async = require("async");
const spidex = require("spidex");
const baseUrl = require("./baseUrl");
var imgGetter = require("./imgGetter");
const cheerio = require("cheerio");

function parsePost(html, task) {
    var $ = cheerio.load(html);
    var object = {};
    object.year = 1994;
    object.month = 12;
    object.day = 6;

    object.list = [];

    $("img").each(function() {
        let img = $(this).attr("src");
        object.list.push(img);
    });

    return object;
}

function get(task) {
    async
    .waterfall([
        function(callback) {
            let cookies = {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                "accept-langugage": "zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4,sv;q=0.2,zh-TW;q=0.2",
                "cache-control": "max-age=0",
                "connection": "keep-alive",
                "host": baseUrl.host,
                "referer": task.task.referer,
                "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"
            }

            console.log(task.task.url);

            spidex
                .get(task.task.url, cookies, function(html, status) {
                    if (status !== 200) {
                        callback(new Error("服务器返回错误的状态码。"));
                        return;
                    }
                    callback(null, html);
                })
                .on("error", callback);
        },

        function(html, callback) {
            var object = parsePost(html, task);
            callback(null, object);
        }
    ], function(err, object) {
        if (err) {
            console.log("× 文章 [" + task.task.url + " ] 抓取错误：" + err.message);

            // 重新push
            // 失败后不重新 push
            //task.task.queue.push(task.task, get);
            task.task.queue.taskDone(task, true);
            return;
        }

        console.log(`√ 抓取了 ${object.year}-${object.month}-${object.day}] 的文章 ${object.list.length} 张图片地址`);

        for (var i = 0; i < object.list.length; i++) {
            task.task.queue.push({
                year: object.year,
                month: object.month,
                url: object.list[i],
                queue: task.task.queue,
                referer: task.task.url
            }, imgGetter.get);
        }

        task.task.queue.taskDone(task, true);
    });
}

exports.get = get;
