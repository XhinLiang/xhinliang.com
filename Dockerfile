FROM node:7

RUN echo "deb http://cn.archive.ubuntu.com/ubuntu/ precise main universe" > /etc/apt/sources.list

RUN apt-get update --fix-missing && apt-get -y --force-yes upgrade && apt-get install -y --force-yes supervisor curl redis-server nginx && mkdir -p /var/log/supervisor && mkdir -p /var/log/nginx
COPY ./dockerfiles/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./dockerfiles/xhinliang.com.conf /etc/nginx/sites-enable/default
COPY ./dockerfiles/xhinliang.com.conf /etc/nginx/sites-available/default
COPY ./dockerfiles/redis.conf /etc/redis/redis.conf

ADD . /app

RUN cd /app/resume && npm install && npm run build

RUN cd /app/image && npm install

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

ENV NODE_ENV=prod
ENV CONFIG_BASEDIR=/configs
ENV CONFIG_DIR=site-image
CMD ["/usr/bin/supervisord"]
EXPOSE 2333
