#!/bin/bash

echo "Deleting Kubernetes resources..."
kubectl delete -f k8s/web-frontend/
kubectl delete -f k8s/order-service/
kubectl delete -f k8s/product-service/
kubectl delete -f k8s/namespace.yaml

echo "Kubernetes resources deleted successfully."