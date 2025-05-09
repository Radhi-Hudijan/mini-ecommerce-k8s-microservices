# Minikube Testing Notes

## Prerequisites

- Install Minikube: https://minikube.sigs.k8s.io/docs/start/
- Start Minikube:
  ```bash
  minikube start
  ```

## Steps

1. Build Docker images inside Minikube:

   ```bash
   eval $(minikube docker-env)
   ./scripts/build-images.sh
   ```

2. Apply Kubernetes manifests:

   ```bash
   ./scripts/apply-k8s.sh
   ```

3. Access the Web Frontend:

   ```bash
   minikube service web-frontend -n mini-ecommerce
   ```

4. Cleanup:
   ```bash
   ./scripts/delete-k8s.sh
   ```
