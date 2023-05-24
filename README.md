# TheSocialNetwork

The Social Network is a robust social media app that allows users to create thoughts and interact with friends through reactions. This repository contains the backend server code for The Social Network.

## Technologies

Node.js: A JavaScript runtime environment used for server-side development.
Express.js: A web application framework for Node.js that provides a robust set of features for building RESTful APIs.
MongoDB: A popular NoSQL database used for storing application data.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a convenient way to interact with the database.
JavaScript: The programming language used for server-side logic and API implementation.
npm: The package manager for Node.js, used for installing and managing project dependencies.

## Installation

Make sure you have Node.js and MongoDB installed on your machine.
Clone the GitHub repository of The Social Network application to your local machine using git clone.
Navigate to the project's root directory in your terminal.
Run npm install to install the project dependencies.

## Usage

Ensure that MongoDB is running on your local machine or provide the appropriate MongoDB connection.
In your terminal, navigate to the project's root directory.
Run npm start to start the application.
Once the server is running, you can use a tool like Postman or any API testing tool to interact with the API endpoints.
Send HTTP requests to the appropriate endpoints (e.g., localhost:<port>/api/users for user-related endpoints) to perform various operations such as creating users, retrieving thoughts, updating reactions, etc.

## API Endpoints

Users

GET /api/users - Get all users
GET /api/users/:id - Get a single user by ID
POST /api/users - Create a new user
PUT /api/users/:id - Update a user
DELETE /api/users/:id - Delete a user

Thoughts

GET /api/thoughts - Get all thoughts
GET /api/thoughts/:id - Get a single thought by ID
POST /api/thoughts - Create a new thought
PUT /api/thoughts/:id - Update a thought
DELETE /api/thoughts/:id - Delete a thought

Reactions

POST /api/reactions/:thoughtId - Create a new reaction for a thought
DELETE /api/reactions/:thoughtId/:reactionId - Delete a reaction from a thought

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Find a live demo here


https://youtu.be/ofkceIp5wgA

![Screenshot 2023-05-23 at 5 52 28 PM](https://github.com/LydRod206/TheSocialNetwork/assets/119384486/43c51b01-2a03-41ab-9b1d-e69da4092451)
