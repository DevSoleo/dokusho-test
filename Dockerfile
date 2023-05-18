FROM debian:bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN ["ls"]

CMD ["sh", "./target/release/test"]
