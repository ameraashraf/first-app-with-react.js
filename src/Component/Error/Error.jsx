import React, { Component } from "react";
import "./Error.css";
export default class Error extends Component {
  render() {
    return (
      <>
        <div className="error d-flex justify-content-center align-items-center flex-column ">
          <h1> Not Found</h1>
          <p> This page doesn’t exist.</p>
        </div>
      </>
    );
  }
}
