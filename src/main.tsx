import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Authorization } from './components/registration-authorization/authorization/Authorization.tsx';
import { Registration } from './components/registration-authorization/registration/Registration.tsx';
import { Account } from './components/account/Account.tsx';

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

//роутер тут ан е в отедельно файле, потому что хз как app через пропсы в роутер передать 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={'/auth'} replace={true}/>,
    },
    {
        path: "/auth",
        element: <Authorization auth={auth}/>
    },
    {
        path: "/reg",
        element: <Registration auth={auth}/>
    },
    {
        path: "/account",
        element: <Account />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
