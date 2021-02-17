FROM node:7 AS node
FROM php:7.4-fpm

COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /usr/local/bin/node /usr/local/bin/node

RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

RUN echo "deb http://cn.archive.ubuntu.com/ubuntu/ precise main universe" > /etc/apt/sources.list

# install dependencies
RUN apt-get update --fix-missing && apt-get -y --force-yes upgrade && apt-get install -y --force-yes supervisor curl redis-server nginx

# init nginx
COPY ./dockerfiles/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./dockerfiles/xhinliang.com.conf /etc/nginx/sites-enable/default
COPY ./dockerfiles/xhinliang.com.conf /etc/nginx/sites-available/default
COPY ./dockerfiles/redis.conf /etc/redis/redis.conf

# init root directory
ADD . /app

# init path /resume
RUN cd /app/resume && ./markdown-resume/bin/md2resume html resume.md /app/resume && mv /app/resume/resume.html /app/resume/index.html

# init path /image
RUN cd /app/image && npm install

# update configuration of nginx using "daemon off" mode
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# init env varioubles
ENV NODE_ENV=prod
ENV CONFIG_BASEDIR=/configs
ENV CONFIG_DIR=site-image

# run supervisor
CMD ["/usr/bin/supervisord"]
EXPOSE 2333
