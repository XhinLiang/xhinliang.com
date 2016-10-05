'use strict';
const Scarlet = require("scarlet-task");
let scarlet = new Scarlet(10);
let indexPage = require("./lib/indexPage");
const baseUrl = require("./lib/baseUrl").url;
let url = `${baseUrl}?page=1`;

scarlet.push({
    url: url,
    page: 1,
    queue: scarlet
}, indexPage.get);
