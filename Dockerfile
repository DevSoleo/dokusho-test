FROM rust

WORKDIR /usr/src/myapp

COPY . .

RUN cargo install --path .
RUN ls

CMD ["./target/release/test"]
