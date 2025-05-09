#!/bin/bash

echo "Building Docker images..."
docker build -t product-service:latest ./services/product-service

docker build -t order-service:latest ./services/order-service

docker build -t web-frontend:latest ./services/web-frontend

echo "Docker images built successfully."