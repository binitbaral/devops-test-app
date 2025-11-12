# DevOps Candidate Assignment – Binit

This project demonstrates practical DevOps skills by containerizing a simple Node.js application, setting up CI/CD with GitHub Actions, and adding a basic monitoring stack using Prometheus and Grafana.

---

##  Project Overview

The repository contains:
- **Node.js App** – A simple Express server responding on port `3000`.
- **Dockerfile** – Containerizes the Node.js application.
- **docker-compose.yml** – Orchestrates the Node app, Prometheus, and Grafana for local development.
- **GitHub Actions (CI/CD)** – Builds, tests, and validates the app on each push to the `main` branch.
- **Prometheus + Grafana** – Provides monitoring and metrics visualization.
- **deploy.sh** – Automates the build and deployment process.

---

##  Running the Application Locally

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git Bash](https://git-scm.com/downloads) or any Bash-compatible terminal

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/binit-devops-assignment.git
   cd binit-devops-assignment
2. Make Deployment Script Executable
   ```bash
   chmod +x deploy.sh

3. Run the deployment script
   ```bash
   ./deploy.sh


The deployment script automates the entire setup process.

#### The script will:
-  Check if Docker is installed  
-  Build the Docker image  
-  Start all services (`nodeapp`, `prometheus`, `grafana`)  
-  Verify if the containers are running successfully  

---

###  Access the Services

Once the script finishes, you can access the running services at:

- **Node App:** [http://localhost:3000](http://localhost:3000)  
- **Prometheus:** [http://localhost:9090](http://localhost:9090)  
- **Grafana:** [http://localhost:3001](http://localhost:3001)

---

##  Monitoring Setup

This project uses **Prometheus** and **Grafana** for container-level monitoring and visualization.

- **Prometheus** collects metrics from the Node.js application endpoint at `/metrics`.  
- **Grafana** connects to Prometheus to visualize those metrics in real time.

---

###  Viewing Metrics

1. Open **Grafana** in your browser:  
   [http://localhost:3001](http://localhost:3001)

2. Add **Prometheus** as a new data source:  
   - Go to **Settings - Data Sources - Add Data Source**  
   - Select **Prometheus**  
   - Set the URL to:  
     ```
     http://prometheus:9090
     ```
   - Click **Save & Test**

3. Create a new **dashboard** and add a **panel**.

4. In the **Query** field, enter:
   ```promql
   http_requests_total
---

##  CI/CD Pipeline (GitHub Actions)

This project uses **GitHub Actions** to automate the build and test process.

###  Workflow Overview

- The pipeline is triggered on every **push** or **pull request** to the `main` branch.  
- It automatically **builds the Docker image** for the Node.js application.  
- A basic test is executed to verify that the app responds correctly (for example, using a `curl` request to ensure it returns the expected message).  
- If all steps complete successfully, the workflow prints: Build and Test Passed

---

###  Challenges & Assumptions

- **Docker Desktop Requirement**  
  Docker Desktop must be running before executing `deploy.sh` on Windows.

- **Docker Compose Version**  
  The deprecated `version:` attribute has been removed from `docker-compose.yml` as Docker Compose v2 no longer requires it.

- **Monitoring**  
  Prometheus and Grafana are used for monitoring because they are lightweight and easy to integrate with containerized services.

---
Author: Binit Baral


