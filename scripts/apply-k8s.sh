#!/bin/bash

echo "Applying Kubernetes manifests..."
kubectl apply -f ./k8s2/namespace.yaml
kubectl apply -f ./k8s2/product-service/
kubectl apply -f ./k8s2/order-service/
kubectl apply -f ./k8s2/web-frontend/

echo "Kubernetes manifests applied successfully."