FROM debian:bullseye-slim

WORKDIR /usr/src/app

COPY . .

CMD ["sh", "./target/release/test"]
