import {createBrowserRouter} from "react-router-dom";
import App from "./src/App";
import {Authorization} from "./src/components/registration-authorization/authorization/Authorization";
import React from "react";
import {Registration} from "./src/components/registration-authorization/registration/Registration.tsx";
import {Account} from "./src/components/account/Account.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/auth",
        element: <Authorization/>
    },
    {
        path: "/reg",
        element: <Registration/>
    },
    {
        path: "/acc",
        element: <Account/>
    }
]);

export default router;