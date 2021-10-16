'use strict';

const tool = require('../core/tool');
const config = require('../config/main.json');
const cache = require('../db/fakecache');

let controller = {};

controller.getImageUrl = async (req, res) => {
    cache.srandmember(tool.getCurrentRedisKey(), function (err, replies) {
        if (err) {
            console.log("err " + err);
            res.send(err);
            return;
        }
        console.log("succ " + replies);
        res.send(replies.replace("http://", "https://").replace("1680x0", "2560x0"));
    });
}

controller.test = async (req, res) => {
    res.send(JSON.stringify({ code: 0, message: 'ok', data: 'hehe' }));
}

controller.list = async (req, res) => {
    cache.smembers(tool.getCurrentRedisKey(), function (err, replies) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(JSON.stringify(replies));
    });
}

module.exports = controller;
