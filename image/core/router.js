'use strict';

/**
 * 这个文件中保存了所有的路由信息，而这些路由指向的是 controller 中的方法
 */
const router = require('express').Router();
const imageController = require('../controllers/image');

/**
 * 随机获取一个图片链接地址
 */
router.get('/image/random', imageController.getImageUrl);

/**
 * 获取现在所有的图片链接地址
 */
router.get('/image/list', imageController.list);


router.post('/image/test', imageController.test);
router.get('/image/test', imageController.test);

module.exports = router;
