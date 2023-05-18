FROM debian:bullseye-slim

WORKDIR /usr/src/app

COPY . .

CMD ["/usr/src/app/target/release/test"]
