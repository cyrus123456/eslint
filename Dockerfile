FROM harbortest.sinosig.com/public/nginx:latest
MAINTAINER yangqinghua-phq <yangqinghua-phq@sinosig.com>
WORKDIR /
ADD nginxint.conf /etc/nginx/conf.d/
ADD dist /etc/nginx/html
ADD myprog /etc/nginx/
# configuration of java and tomcat ENV
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone && chmod 04755 /etc/nginx/myprog
ENV LANG zh_CN.UTF-8
# container listener port  yes
EXPOSE 8088
