# ZipLink

ZipLink is a powerful URL shortener service that allows you to generate short and unique URLs for long web addresses. With a user-friendly interface and seamless browsing experience, ZipLink makes sharing and managing URLs effortless.

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Introduction

ZipLink is a simple yet powerful URL shortener that aims to provide users with easy-to-share short links. This project demonstrates the integration of Vue.js for the frontend, Go for the backend, and MongoDB for the database. The frontend offers a user-friendly interface for shortening URLs, while the backend efficiently handles URL redirection and storage.

## Key Features

- URL Shortening: Generate short and unique codes for long URLs, making them more convenient and easier to share.
- Redirection: Redirect users from the shortened URLs to the original long URLs seamlessly.

## Technologies

- Frontend: Vue.js
- Backend: Go (Golang)
- Database: MongoDB
- Web Framework: Gin (for Go)
- HTTP Router: Gorilla Mux (for Go)

## Getting Started

To get started with ZipLink, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/leovaldez08/ZipLink.git
   cd ZipLink
   ```
2. Install dependencies for the frontend:
   ```bash
   cd frontend
   yarn
   ```
3. Configure the backend:
   Create a .env file in the root directory (or set environment variables) with the following settings:
   ```bash
   PORT=8080
   MONGODB_URI=mongodb://localhost:27017/ziplink
   ```
4. Run the Frontend:
   ```bash
   # From the root directory
   cd frontend
   yarn dev
   ```
5. Run the Backend:
   ```bash
   # From the root directory
   go run main.go
   Visit http://localhost:8080 in your web browser to access the ZipLink application.
   ```

## Deployment

To deploy ZipLink to a production environment, follow these general steps:

1. Build the frontend for production:
   ```bash
   # From the root directory
   cd frontend
   yarn build
   ```
2. Build the backend for production:
   ```bash
   # From the root directory
   go build -o ziplink
   ```
3. Set up a MongoDB instance in your preferred cloud provider or on a server.
4. Set the necessary environment variables for the backend in the production environment.
5. Deploy the built backend and the frontend build to your production server or cloud platform.

## Feedback and Contributions

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please don't hesitate to submit bug reports or feature requests and pull requests through this GitHub repository.

## Contribution Guidelines

We welcome contributions from anyone interested in helping to enhance this project. If you'd like to contribute, please follow these guidelines:

1. Fork the repository to your own GitHub account.
2. Clone the project to your local machine.
3. Create a new branch with a descriptive name (e.g., `my-new-feature`).
4. Make changes to the code and commit them to your branch.
5. Push your changes to your fork (`git push origin my-new-feature`).
6. Open a pull request in this repository, describing the changes you've made.

Please make sure to follow the standard coding conventions and best practices.
