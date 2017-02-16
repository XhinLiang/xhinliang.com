'use strict';
const app = require('./app');
const config = require('../config/main.json');
const port = config['port'];
const Scarlet = require("scarlet-task");
const baseUrl = require("../lib/baseUrl").url;
let scarlet = new Scarlet(10);
let indexPage = require("../lib/indexPage");
let url = `${baseUrl}?page=1`;

app.listen(port, function() {
    console.log('Node app is running, port:', port);
    // 注册全局未捕获异常处理器
    process.on('uncaughtException', function(err) {
        console.error("Caught exception:", err.stack);
    });
    process.on('unhandledRejection', function(reason, p) {
        console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
    });
});

// 两小时往队列里添加一次任务，亦即两小时更新一次
setInterval(function() {
    scarlet.push({
        url: url,
        page: 1,
        queue: scarlet
    }, indexPage.get);
}, 2 * 60 * 60 * 1000);
