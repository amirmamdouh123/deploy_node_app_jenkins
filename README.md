# DevOps AWS Project

This project demonstrates a DevOps pipeline using AWS, Docker, Kubernetes, and Jenkins to automate the deployment of a Node.js application.

## Project Overview

This setup automates the CI/CD process by:
- Building a Docker image for a Node.js application.
- Pushing the image to AWS Elastic Container Registry (ECR).
- Deploying the application to a Kubernetes cluster running on AWS EC2 (with k3s).
- Exposing the service using a LoadBalancer.
- Using Jenkins as the CI/CD tool, triggered by GitHub webhooks.

## Project Components

### AWS Infrastructure

- **EC2 Instance**: Hosts Jenkins, Docker, Kubernetes (k3s), and `kubectl`.
- **ECR Repository**: Stores the built Docker images.
- **IAM Role**: Grants Jenkins permissions to push images to ECR and manage Kubernetes resources.

### Codebase Files

| File Name | Description |
|-----------|-------------|
| `Dockerfile` | Defines the container image for the Node.js app. |
| `Jenkinsfile` | Automates the CI/CD process. |
| `nodejs-app.js` | A simple Node.js application. |
| `nodejs-app-deployment.yml` | Kubernetes Deployment manifest. |
| `node-app-loadbalancer.yml` | Kubernetes LoadBalancer manifest. |
| `nodejs-NodePort.yml` | Alternative NodePort service definition. |

## CI/CD Pipeline Steps

1. **Jenkins Setup**
   - Installed on an AWS EC2 instance.
   - Configured with GitHub webhook integration.
2. **Pipeline Execution**
   - Pulls the latest code from GitHub.
   - Builds the Docker image.
   - Pushes the image to AWS ECR.
   - Applies Kubernetes deployment and LoadBalancer configuration.
3. **Deployment**
   - The Node.js app runs in Kubernetes pods.
   - Exposed via LoadBalancer for external access.

## How to Run Locally

```sh
# Clone this repository
git clone https://github.com/deploy_node_app_jenkins/
cd deploy_node_app_jenkins

# Build and run the Docker container
docker build -t nodejs-app .
docker run -p 3000:3000 nodejs-app
```

## Future Improvements

- Add monitoring using Prometheus and Grafana.
- Implement Helm charts for easier deployment.
- Automate infrastructure provisioning with Terraform.

## Author

[Your Name] - DevOps Engineer

