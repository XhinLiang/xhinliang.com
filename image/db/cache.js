const redis = require("redis");
const redisClient = redis.createClient();
redisClient.auth('redis_xhinliang')

module.exports = redisClient;
