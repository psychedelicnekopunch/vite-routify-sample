#
# このファイルは現在不要。
# RUN rm -rf node_modules しても node_modules が消えない。
# RUN npm install しても node_modules が生成されない。
# 挙動がよく分からない。
#
#

FROM node:22.9.0
#FROM node:20-bookworm-slim

WORKDIR /var/www/html

COPY ./app /var/www/html
#COPY ./../nginx/default.conf /etc/nginx/conf.d/default.conf

#RUN rm -rf package-lock.json
#RUN rm -rf node_modules
#RUN npm install
RUN ls

CMD ["npm", "run", "dev"]
