# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Quiz App

## Overview
This is a React-based Quiz App that fetches quiz questions from an API and displays them to the user. The app allows users to answer multiple-choice questions and see their scores.

## Features
- Fetches quiz questions dynamically using an API
- Displays multiple-choice questions
- Tracks user responses and calculates the score
- Handles loading and error states
- Responsive design for mobile and desktop

## Tech Stack
- **Frontend:** React, Axios
- **Backend:** API (JSON Server or External API)

## Setup Instructions
### Prerequisites
- Node.js and npm installed
- Git installed

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd quiz-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`

## API Configuration
Ensure the API URL is correct in the code:
```js
const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
```
If you face CORS issues, use a proxy like:
```js
const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.jsonserve.com/Uw5CrX');
```

## Screenshots
![Screenshot (6)](https://github.com/user-attachments/assets/11ffeb4c-4122-4aac-8db9-33a7d1f0a655)
![Screenshot (7)](https://github.com/user-attachments/assets/594f64c7-c3da-45e0-acc6-667e26d9edcc)



## Video Walkthrough





https://github.com/user-attachments/assets/80cdb9c5-191d-43bc-900c-5c3a21b28a8d





## Known Issues & Fixes
- **Error 500 (Internal Server Error):** Check API response format.
- **CORS issues:** Use a proxy or configure CORS on the backend.

## Contributing
Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.




