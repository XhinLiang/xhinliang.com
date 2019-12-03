'use strict';

const tool = require('../core/tool');
const config = require('../config/main.json');
const redisClient = require('../db/cache');

let controller = {};

controller.getImageUrl = async (req, res) => {
    redisClient.srandmember(tool.getCurrentRedisKey(), function (err, replies) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(replies.replace("http://", "https://").replace("1680x0", "2560x0"));
    });
}

controller.test = async (req, res) => {
    res.send(JSON.stringify({ code: 0, message: 'ok', data: 'hehe' }));
}

controller.list = async (req, res) => {
    redisClient.smembers(tool.getCurrentRedisKey(), function (err, replies) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(JSON.stringify(replies));
    });
}

module.exports = controller;
