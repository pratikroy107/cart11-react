import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFvcI4SjZSg8Qu5hB_O_BttYDVXjnpz5I",
  authDomain: "cart00.firebaseapp.com",
  projectId: "cart00",
  storageBucket: "cart00.appspot.com",
  messagingSenderId: "48438481274",
  appId: "1:48438481274:web:4530d04613d33abba946c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
