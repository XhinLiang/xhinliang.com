 # [xhinliang.com](https://xhinliang.com)

## Overview

My personal site: [xhinliang.com](https://xhinliang.com).

Build with docker & deploy with [daocloud.com](https://daocloud.io)

This project contains four modules: `home` `about` `image` `resume`

## Build & Run

### build
`make build`

### run
`make run`

### debug with bash
`make bash`

## `About` module

Build with `impress.js`, just HTML & CSS & JavaScript and nothing special.

## `Image` module

Build with `Express.js` & `Redis`.

This service provide some API for this site.

It will crawl my `LOFTER` site intervaly, and store my photos into Redis, so I can use the photos of my `LOFTER`.

## `Home`

Build with plain HTML & JavaScript.

## `resume`

Write in `Markdown` and will be converted to HTML after building.

# Licence

```
                                Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/
```


