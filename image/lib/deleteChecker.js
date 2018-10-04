'use strict';

const cache = require('../db/cache');


exports.check = function() {
    let deleteUrls = cache.sdiff('xhinliang_lofter', 'xhinliang_lofter_temp');
    console.log("deleteUrls: " + deleteUrls);
    deleteUrls.forEach(function(deleteUrlItem) {
        console.log("delete Url: " + deleteUrlItem);
        cache.srem('xhinliang_lofter', deleteUrlItem);
    });
    cache.del('xhinliang_lofter_temp');
};
