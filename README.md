# Notes


## Available Scripts
docker build --build-arg REACT_APP_API_URL="http://api-service:8081" -t  library-k8-fe .

docker rm -f lib-fe
docker run -it -p 8080:80 --name lib-fe library-rest-fe



docker tag library-k8-fe-v2 jtabaku/generalimages:library-fe-v3.0
docker push  jtabaku/generalimages:library-fe-v3.0


### `yarn start`
