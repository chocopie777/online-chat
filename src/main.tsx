import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyChOePsyYXGcgap5m11Dag2S-yvLOaMnfs",
  authDomain: "online-chat-ecf85.firebaseapp.com",
  projectId: "online-chat-ecf85",
  storageBucket: "online-chat-ecf85.appspot.com",
  messagingSenderId: "115751600051",
  appId: "1:115751600051:web:32ef4f957ca3c08682d5c6",
  measurementId: "G-JRSSYQSJTS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
