// import of libraries
import "./layouts/Layout.scss";
import Layout from "./layouts/Layout";
import React from 'react';
import Homepage from "./pages/Home/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// starting of the main application 


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,

            //this contain all the children which will have the format of the layout
            children: [
                //path for the homepage add other pages which will follow the layout type
                {
                    path: "/",
                    element: <Homepage />
                },
            ]
        }
    ])

    //returning router provider 
    return (
        <RouterProvider router={router} />
    )
}
//exporting a default app
export default App;
