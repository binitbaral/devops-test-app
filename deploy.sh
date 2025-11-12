#!/bin/bash

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
  echo "Docker not found. Please install Docker first."
  exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null
then
  echo "Docker Compose not found. Please install it first."
  exit 1
fi

echo "Building Docker image..."
docker-compose build

echo "Starting containers..."
docker-compose up -d

# Wait a few seconds for containers to start
sleep 5

# Check if the node app container is running
if [ "$(docker ps -q -f name=nodeapp)" ]; then
  echo "App is running successfully."
else
  echo "App failed to start."
  exit 1
fi
