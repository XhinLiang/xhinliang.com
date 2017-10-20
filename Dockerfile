FROM node:7

RUN echo "deb http://cn.archive.ubuntu.com/ubuntu/ precise main universe" > /etc/apt/sources.list

RUN apt-get update --fix-missing && apt-get -y --force-yes upgrade && apt-get install -y --force-yes supervisor curl redis && mkdir -p /var/log/supervisor
COPY ./dockerfiles/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./dockerfiles/xhinliang.com.conf /etc/nginx/conf.d/xhinliang.com.conf
COPY ./dockerfiles/redis.conf /etc/redis/redis.conf

ADD . /app
WORKDIR /app/image
RUN npm install

ENV NODE_ENV=prod
ENV CONFIG_BASEDIR=/configs
ENV CONFIG_DIR=site-image
CMD ["/usr/bin/supervisord"]
EXPOSE 8081
