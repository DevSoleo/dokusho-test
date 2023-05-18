FROM rust

WORKDIR /usr/src/app

COPY ./target/release/test /bin/test-program

CMD ["/bin/test-program"]
