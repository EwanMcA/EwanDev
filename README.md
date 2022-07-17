# EwanDev
My Portfolio

## Run

```
docker build . -t ewandev:latest
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 8080:8080 \
    ewandev:latest
```
