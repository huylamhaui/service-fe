#!/bin/bash
echo Image name: ?
read IMAGE_NAME

echo Container name: ?
read INSTANCE_NAME

echo Port to bind: ?
read PORT

echo Starting deploy
echo Step1: build image

docker stop $INSTANCE_NAME || true
docker rm $INSTANCE_NAME || true
docker image rm $IMAGE_NAME || true

docker build --tag $IMAGE_NAME .
docker run -it --name $INSTANCE_NAME -p $PORT:80 $IMAGE_NAME
