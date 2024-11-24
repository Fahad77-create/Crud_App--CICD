# CRUD App CI/CD Pipeline

This repository includes the Continuous Integration/Continuous Deployment (CI/CD) pipeline for the CRUD app. The pipeline performs the following steps:

1. **Cloning the Git Repository**  
2. **Building Docker Images**  
3. **Running SonarQube Tests**  
4. **Pushing Docker Images to a Container Registry**  
5. **Running Trivy Security Scan**  
6. **Deploying the App to Kubernetes**  

## Pipeline Steps

### 1. Clone the Git Repository
The pipeline starts by cloning the repository from the specified Git repository. This ensures that the latest changes are available for the build process.

### 2. Build Docker Image
Using the `Dockerfile` found in the `client/` and `server/` folders, the pipeline builds a Docker image for both the frontend and backend services.

```bash
docker build -t <image_name>:<tag> .
