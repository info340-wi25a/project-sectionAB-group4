import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWkcW34kyOD0r4JcIHoEbVILJsXFGcnEk",
  authDomain: "project-sectionab-group4.firebaseapp.com",
  projectId: "project-sectionab-group4",
  storageBucket: "project-sectionab-group4.firebasestorage.app",
  messagingSenderId: "996826751298",
  appId: "1:996826751298:web:6b95e8c8a52f6b472be8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export { db };
