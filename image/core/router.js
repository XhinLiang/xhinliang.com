'use strict';
/**
 * 这个文件中保存了所有的路由信息，而这些路由指向的是 controller 中的方法
 */
const router = require('express').Router();
const imageController = require('../controllers/image');

router.get('/image/random', imageController.getImageUrl);

module.exports = router;
