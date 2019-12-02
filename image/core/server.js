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

// 立即抓取一次
scarlet.push({
    url: url,
    page: 1,
    queue: scarlet
}, indexPage.get);

// 每隔 1 小时抓取一次
setInterval(function() {
    scarlet.push({
        url: url,
        page: 1,
        queue: scarlet
    }, indexPage.get);
}, 1 * 60 * 60 * 1000);
