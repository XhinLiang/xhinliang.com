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

module.exports = pub;
