# NBA 75 All-Time Player Search

## Description

:computer: [Demo Page](https://williamnovak.github.io/NBA-75/)

:basketball: This repository contains the source code for a web application that allows users to search for players who were part of the list of the 75 greatest players in NBA history. The search can be performed by name, team, or other relevant terms.

## Features

* **Flexible Search:** Users can search by full name, last name, team name, position, or even keywords related to a player's career.
* **Detailed Results:** When a player is found, the system displays:
    * Full name
    * Photo
    * Player number
    * Position
    * Total points
    * Brief career description
    * Link for more information
* **Intuitive Interface:** The user interface is designed to be simple and easy to navigate, allowing basketball fans to quickly find the information they are looking for.

## Technologies

* **HTML**
* **CSS**
* **Javascript**

## CI/CD Pipeline

This project implements a Continuous Integration and Deployment (CI/CD) pipeline using GitHub Actions to ensure code quality and structural consistency on every update to the repository.

The pipeline is automatically triggered on every push to the `main` branch and is divided into three main stages:

#### Build Stage
- Verifies the project structure
- Ensures essential files and directories exist

#### Test Stage
- Installs Node.js environment
- Performs JavaScript syntax validation using Node
- Validates HTML using html-validate
- Validates infrastructure using Terraform

#### Deploy Stage
- Authenticates with AWS using GitHub Secrets
- Synchronizes the application files with the S3 bucket
- Publishes the latest version of the website automatically

The CI configuration can be found in `.github/workflows/ci.yml`

## Infrastructure as Code (IaC)

The infrastructure for this project is defined using **Terraform**, allowing automated provisioning of cloud resources on AWS.

The following resources are created:
- **S3 Bucket**: Used to host the static website
- **Static Website Configuration**: Enables web hosting using `index.html` as the entry page
- **Public Access Policy**: Allows public read access to the website files

All infrastructure code is located in the `/infra` directory.

#### Prerequisites

Before running the infrastructure, ensure the following tools are installed:

- Terraform
- AWS CLI

#### AWS Credentials Configuration

To authenticate with AWS Academy, create the credentials file:

**Path:**
`~/.aws/credentials`

**Example:**
```ini
[default]
aws_access_key_id=YOUR_ACCESS_KEY
aws_secret_access_key=YOUR_SECRET_KEY
aws_session_token=YOUR_SESSION_TOKEN
```

#### How to Provision Infrastructure

1. Navigate to the infrastructure directory:
    ```bash
    cd infra
    ````
2. Initialize Terraform:
    ````bash
    terraform init
    ````
3. Preview the execution plan:
    ````bash
    terraform plan -var="bucket_name=bucket-devops-william-novak"
    ````
4. Apply the configuration:
    ````bash
    terraform apply -var="bucket_name=bucket-devops-william-novak"
    ````
5. Upload project files to the bucket
    ````bash
    cd ..
    aws s3 sync . s3://bucket-devops-william-novak
    ````

Terraform will output the website URL and you can access the application directly through this URL in your browser.

## Docker Container and Components

The application was containerized using Docker and orchestrated using Docker Compose.

- **Dockerfile**: Defines how the application image is built using Nginx
- **docker-compose.yml**: Manages container execution and port mappings
- **deploy.sh**: Automates the deployment process by rebuilding and restarting containers

#### Running the Application

1. Start the application:
    ````bash
    ./deploy.sh
    ````

2. Access the application: http://localhost:8080

3. Stop the application:
    ````bash
    docker compose down
    ````