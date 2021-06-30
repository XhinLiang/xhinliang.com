 # [xhinliang.com](https://xhinliang.com)

## Overview

My personal site: [xhinliang.com](https://xhinliang.com). Build with Docker and deploy by [daocloud.com](https://daocloud.io).

This project contains three modules: `home` `image` `resume`.

## `Image` module

Image module is builded by `Express.js` & `Redis`, providing some API for this site.

By crawling photos of my `LOFTER` and storing to Redis intervaly, it can provide all the urls of of my `LOFTER` photo by RESTful API.

## `Home` module

Home module is a static front end page,  builded by plain plain HTML and JavaScript.

## `Resume` module

Resume module provide some information of me, Writing in `Markdown`, and automaticly converted to HTML by some tools.

## Build & Run

There are some Makefile scripts for building and debuging.

### build

To build this project to Docker Image, just run `make build`.

### run

To run this project to in Docker Container, just run `make run`.

### debug with bash

To run this project to in Docker Container, and enter the Container via bash, just run `make bash`.


# Licence

```
                                Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/
```


