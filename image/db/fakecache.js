'use strict';

const pub = {};
const localCache = {};

pub.expire = function (key, time, cb) {
  console.log(key + " fake expire for " + time);
  setTimeout(function() {
    delete localCache[key];
  }, time);
}

pub.sadd = function (key, value, cb) {
  console.log(key + " fake sadd for " + value);
  if (localCache[key] === undefined) {
    localCache[key] = new Set();
  }
  localCache[key].add(value);
}

pub.smembers = function (key, cb) {
  console.log(key + " fake smembers");
  if (localCache[key] == undefined) {
    cb(null, []);
    return;
  }
  cb(null, [...localCache[key]]);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 不含最大值，含最小值
}

pub.srandmember = function (key, cb) {
  console.log(key + " fake srandmember");
  if (localCache[key] == undefined) {
    cb(null, "");
    return;
  }
  let size = localCache[key].size;
  let random = getRandomInt(0, size);
  let current = -1;
  console.log(`size ${size} random ${random}`);
  for (let item of localCache[key]) {
      if (++current == random) {
          cb(null, item);
          return;
      }
  }
  cb(null, "");
}

module.exports = pub;