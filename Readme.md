# CRUD App Pipeline
This repository contains the pipeline configuration for the CRUD app, which automates the deployment and testing processes using Jenkins. The pipeline includes the following stages:

- **Cloning from Git**: Pulls the latest code from the repository.
- **Dockerfile Build**: Builds the Docker image for the client and server.
- **SonarQube Testing**: Runs static code analysis using SonarQube to ensure code quality and security.
- **Docker Push**: Pushes the Docker image to a container registry.
- **Trivy Scan**: Scans the Docker image for vulnerabilities using Trivy.
- **Kubernetes Apply**: Deploys the app on Kubernetes by applying the necessary configuration files.

## Pipeline Stages
### 1. Clone from Git
- The pipeline starts by cloning the latest version of the repository from Git.
- The repository URL is fetched from the configured Git credentials in Jenkins.

### 2. Dockerfile Build
- The pipeline then proceeds to build Docker images for both the client and server using the provided `Dockerfile` in the respective directories.
- The Docker image is built using the `docker build` command with the context pointing to the application directories.

### 3. SonarQube Testing
- The pipeline integrates with **SonarQube** to run static code analysis on the codebase.
- The analysis helps in identifying code smells, bugs, and vulnerabilities before proceeding further.

### 4. Docker Push
- After the Docker images are built and tested, the images are pushed to a container registry (e.g., Docker Hub, AWS ECR, etc.).
- This allows the images to be accessed by Kubernetes for deployment.

### 5. Trivy Scan
- **Trivy** is used to scan the Docker image for known vulnerabilities.
- The pipeline runs a scan to ensure the image does not contain any critical vulnerabilities before being deployed.

### 6. Kubernetes Apply
- The final stage of the pipeline applies the Kubernetes configuration files to the Kubernetes cluster.
- This includes deploying the client and server apps, creating services, ingress resources, and other necessary configurations for the app's functionality.

## Requirements
- Jenkins server with necessary plugins (Docker, SonarQube, Trivy, Kubernetes, Git).
- SonarQube server for static code analysis.
- Docker registry (Docker Hub, AWS ECR, etc.) for pushing the built images.
- Kubernetes cluster to apply configuration files and deploy the app.

## How to Use
1. **Set up Jenkins**:
   - Install the necessary plugins (Git, Docker, SonarQube, Trivy, Kubernetes, etc.).
   - Configure the pipeline in Jenkins by linking to this repository.
   - Set up the necessary credentials for accessing the Git repository, Docker registry, SonarQube, and Kubernetes cluster.

2. **Push Code**:
   - Whenever you push new code to the repository, the pipeline will automatically trigger, going through the stages of building, testing, pushing, scanning, and deploying.
