import React, { Component } from "react";

import { Outlet } from "react-router-dom";
import About from "./../About/About";
import Home from "./../Home/Home";
import Portfolio from "./../Portfolio/Portfolio";
import Down from "../Down/Down";
import Navbar from "./../Navbar/Navbar";
import Error from "../Error/Error";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Outlet />

        <Down />
      </>
    );
  }
}
