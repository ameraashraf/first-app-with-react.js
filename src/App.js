import React, { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Layout from "./Component/Layout/Layout";
import Error from "./Component/Error/Error";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,

    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Error /> },
      { path: "first-app-with-react.js", element: <Home /> },
    ],
  },
]);

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}
