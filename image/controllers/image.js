'use strict';

const tool = require('../core/tool');
const config = require('../config/main.json');
const redisClient = require('../db/cache');

let pub = {};

pub.getImageUrl = async(req, res) => {
    redisClient.srandmember('xhinliang_lofter', function(err, replies) {
        if (err) {
            res.send(err);
            return;
        }
        res.send(replies);
    });
}

pub.test = async(req, res) => {
    console.log(JSON.stringify(req.headers));
    res.send(JSON.stringify({code: 0, message: 'ok', data: 'hehe'}));
}
module.exports = pub;
