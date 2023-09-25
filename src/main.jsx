import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./Pages/Home/Home";
import DonationDetails from "./Pages/DonationDetails/DonationDetails";
import Error from "./Pages/Error/Error";
import Donation from "./Pages/Donation/Donation";
import Statistics from "./Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/donationDetails/:id",
                element: <DonationDetails />,
                loader: () => fetch("/DonationData.json"),
            },
            {
                path: "/donation",
                element: <Donation />,
                loader: () => fetch("/DonationData.json"),
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: () => fetch("/DonationData.json"),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
