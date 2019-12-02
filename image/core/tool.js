'use strict';

let pub = {};

pub.l = function(msg){
  console.log('\n\n', msg, '\n\n');
};

pub.debug = pub.l;

pub.getCurrentRedisKey = function () {
  let timestamp = Date.now();
  return "lofter_" + ( timestamp / 1000 / 60 / 60);
}

pub.getNextRedisKey = function () {
  let timestamp = Date.now();
  return "lofter_" + ( timestamp / 1000 / 60 / 60 + 1);
}

pub.fail = function(res, err) {
  res.status(err.status).send({
    err: err.status,
    msg: err.msg
  });
};

module.exports = pub;
