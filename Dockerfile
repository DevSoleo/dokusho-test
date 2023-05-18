FROM debian:bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN ["ls"]

CMD ["ls"]
