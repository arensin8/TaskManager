# Task Management System

## Overview

This project is a task management system built with Node.js, Express.js, and Jest. It provides a web API for creating, assigning, and tracking tasks, as well as generating reports on task completion. The system is designed with clean code principles and includes comprehensive unit testing.

## Core Features

### Task Management
- **Create Tasks**: Allows creation of tasks with a title, description, due date, priority, and assigned member.
- **Update Task Status**: Ability to update the status of tasks and mark them as complete.
- **View Task Details**: Fetch and view details of tasks.

### Reporting
- **Task Completion by Time Period or Team Member**: Generate JSON reports showing tasks completed within a specified time period or by a specific team member.
- **Number of Tasks Completed and Average Time to Complete Tasks**: Generate JSON reports showing the total number of completed tasks and the average time taken to complete them.

## Technology Stack

- **Node.js**: JavaScript runtime used for server-side code.
- **Express.js**: Framework used for building the API.
- **MongoDB**: NoSQL database used for data storage.
- **Jest**: Testing framework used for unit testing.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/arensin8/TaskManager.git
   cd TaskManager


2. **Navigate to the project directory:**
   
   ```bash
   cd TaskManager

3. **Install the dependencies:**

   ```bash
   npm install


4. **Create a .env file in the root directory with the following environment variables:**

   ```bash
   PORT=4000
   MONGO_URI=your-mongodb-uri

## Running the Application and Tests

   ```bash
   npm start
   npm test

