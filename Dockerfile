FROM debian:bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN ["ls ./target/release/"]

CMD ["ls ./target/release/"]
