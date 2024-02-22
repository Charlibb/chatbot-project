# Fullstack Chatbot with React + TypeScript + Vite + Node.js

![image](https://github.com/Charlibb/chatbot-project/assets/81753538/5f1d27c6-1ab9-454f-b706-9d8e5896c108)


# Fullstack Chatbot with React + TypeScript + Vite + Node.js

This repository contains a full-stack chatbot application built using React, TypeScript, Vite, and Node.js. The chatbot interacts with users through a simple web interface, utilizing the OpenAI API to generate responses based on user input.

## Features:

* User-friendly interface for interacting with the chatbot
* Seamless integration with the OpenAI API for chatbot responses
* Clean and modular code structure for maintainability
* TypeScript for type safety and improved code quality
* Vite for efficient development and build process

## Project Structure:

* `frontend/`: Contains the React application code
    * `App.tsx`: The main component for the chatbot interface
    * `components/`: Additional components for UI elements (optional)
    * `styles/`: Styling files (optional)
* `backend/`: Houses the Node.js backend server
    * `index.ts`: The entry point for the server
    * `routes/`: Defines API routes, including `/chatbot`
    * `utils/`: Shared utilities for API interactions (optional)
* `.env`: Stores environment variables for API keys and configurations (remember to add .env to your gitignore file!)

## Prerequisites:

* Node.js and npm (or yarn) installed
* An OpenAI API key (create one at [https://beta.openai.com/](https://beta.openai.com/))
* Basic knowledge of React, TypeScript, Vite, and Node.js

## Setup and Usage:

1. Clone this repository:
    ```bash
    git clone [https://github.com/your-username/fullstack-chatbot.git]
    ```
2. Create a `.env` file in the root directory with the following variables:
    ```
    VITE_OPEN_AI_KEY=YOUR_OPENAI_API_KEY
    PORT=3005 (or your desired port)
    ```
3. Install dependencies in both `frontend` and `backend` directories:
    * `frontend`: `cd frontend && npm install` (or `yarn`)
    * `backend`: `cd backend && npm install` (or `yarn`)
4. Start the development server:
    ```bash
    npm run dev` (or `yarn dev`)
    ```
5. Access the application in your browser at `http://localhost:3005`.
    ```bash
    node server.js
    ```

## Customization:

* The chatbot's personality and responses can be customized by modifying the content and settings in the `/chatbot` route handler.
* You can add new features and functionality to the frontend and backend as needed.


## Thanks:

To Sammy Jo for her tutorial and insights!



