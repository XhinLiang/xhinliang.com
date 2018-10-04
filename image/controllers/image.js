'use strict';

const tool = require('../core/tool');
const config = require('../config/main.json');
const redisClient = require('../db/cache');

let controller = {};

controller.getImageUrl = async(req, res) => {
    redisClient.srandmember('xhinliang_lofter', function(err, replies) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(replies);
    });
}

controller.test = async(req, res) => {
    res.send(JSON.stringify({code: 0, message: 'ok', data: 'hehe'}));
}

controller.list = async(req, res) => {
    redisClient.smembers('xhinliang_lofter', function(err, replies) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(JSON.stringify(replies));
    });
}

module.exports = controller;
