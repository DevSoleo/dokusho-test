FROM rust

WORKDIR /usr/src/myapp

COPY . .

RUN cargo install --path ./target/release/

CMD ["./target/release/test"]
