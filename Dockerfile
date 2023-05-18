FROM debian:bullseye-slim

COPY . .

CMD ["./target/release/test"]
