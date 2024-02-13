# 🌻 Chingu Trivia 
Welcome to the Chingu Trivia 🚀, a web application built with the MERN (MongoDB, Express.js, React, Node.js) stack! This app allows users to engage in trivia quizzes across three categories: HTML, CSS, and JavaScript. The app includes user authentication using JSON Web Tokens (JWT) for secure login and score-saving and fetching capabilities.

## 🚀 Features
*   **Authentication with JWT:** Securely authenticate users to save and fetch scores.
*   **Score Saving and Fetching:** Track your progress and get your latest score.   
*   **Three Quiz Categories:** Choose from HTML, CSS, and JavaScript quizzes.    
*   **Lottie Animations:** Elevate the user experience with engaging animations.  
*   **Responsive Design:** Enjoy seamless gameplay across devices.

## Tech Stack 🛠️

*   **MongoDB:** For storing user data and scores.
*   **Express.js:** Backend framework for building robust APIs.   
*   **React:** Frontend library for a dynamic and interactive UI.    
*   **Node.js:** Server-side JavaScript for handling requests.   
*   **JWT (JSON Web Tokens):** Ensures secure authentication.   
*   **Lottie Animations:** Add flair with dynamic animations.


## ✨ Getting Started:
1. Clone the Repository:
   ```bash
   git clone https://github.com/Sushmita-Ghosh/chingu-trivia.git
   ```
2. Install Dependencies for both frontend & backend:
  ```bash
   cd frontend
   npm install
   
   cd backend
   npm install
   ```
3. Set Variables in the config.js in backend folder:
   ```bash
   MONGO_URI = Create a cluster in mongodb and we need to provide the url here
   SECRET_KEY= Put any string here

   After updation it should look something like this:
   MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.cnjhdht.mongodb.net/chinguusers";
    SECRET_KEY = "mySecret";
   ```
4. Launch frontend & backend in two different terminal:
   ```bash
   cd frontend --> do this in terminal 1
   npm run dev

   cd backend   --> do this in terminal 2
   npm run start
   ```
   



## 🌻 Deployment:
* Used [Render](https://dashboard.render.com/) for web service/api deployment.
* Used [Netlify](https://app.netlify.com/) for the frontend development
* The project is available [here✨](https://chingu-tect-trivia.netlify.app/).

## 📝 Folder Structure:
```lua
chingu-trivia/
|-- frontend/
|   |-- src/
|       |-- components/
|       |-- assets/
|       |-- context/
|       |-- constants/
|       |-- App.jsx
|       |-- main.jsx
|   |-- package.json
|
|-- backend/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- config/
|   |-- middlewares/
|   |-- service/
|   |-- connectDB.js
|   |-- index.js
|   |-- package.json
|
|-- .gitignore
|-- README.md
|-- LICENSE
```
