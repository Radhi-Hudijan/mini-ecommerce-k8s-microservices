# Mini E-commerce App with Kubernetes

This project demonstrates a microservices-based architecture for a mini e-commerce application. It includes the following components:

- **Product Service**: Exposes a product catalog.
- **Order Service**: Accepts orders and communicates with the Product Service.
- **Web Frontend**: A React-based frontend for listing products and placing orders.

## Project Structure

```
k8s-microservices-mini-ecommerce-app/
│
├── README.md
├── .gitignore
│
├── services/
│   ├── product-service/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── src/
│   │       └── index.js
│   │
│   ├── order-service/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── src/
│   │       └── index.js
│   │
│   └── web-frontend/
│       ├── Dockerfile
│       ├── package.json
│       └── src/
│           └── App.js
│
├── k8s/
│   ├── product-service/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── configmap.yaml
│   │
│   ├── order-service/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── configmap.yaml
│   │
│   ├── web-frontend/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── ingress.yaml
│   │
│   └── namespace.yaml
│
├── scripts/
│   ├── build-images.sh          # Builds local Docker images
│   ├── apply-k8s.sh             # Applies all manifests
│   └── delete-k8s.sh            # Cleanup
│
└── minikube/
    └── notes.md                 # Your local testing notes & tips
```

## Getting Started

1. **Build Docker Images**:

   ```bash
   ./scripts/build-images.sh
   ```

2. **Deploy to Kubernetes**:

   ```bash
   ./scripts/apply-k8s.sh
   ```

3. **Cleanup**:
   ```bash
   ./scripts/delete-k8s.sh
   ```

## Prerequisites

- Docker
- Kubernetes (Minikube or any other cluster)
- Node.js
- React
