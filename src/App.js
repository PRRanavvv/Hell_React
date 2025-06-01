import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/Restaurants_menu.jsx";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import Grocery from "./components/Grocery.js";



const Grocery = lazy(() => import("./components/Grocery.js"));



const AppLayout = () => {
    return <div className = "app">
        <Header />
        <Outlet />
    </div>;
};


const appRouter = createBrowserRouter([
    {
      path: "/", // Make sure this path is a valid string
      element: <AppLayout />,
      // Other route properties...
      children: [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/grocery",
            element: <Suspense fallback ={<h1>Loading...</h1>}> <Grocery /> </Suspense>,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>,
        }
    ],
    errorElement: < Error />,
    },

]); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);