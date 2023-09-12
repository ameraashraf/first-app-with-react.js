import React, { Component } from "react";

import $ from "jquery";

import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default class Portfolio extends Component {
  componentDidMount() {
    // const plusIcon = document.querySelector(".plus-icon");
    // plusIcon.addEventListener("click", function () {
    //   console.log("hi");
    // }
    // );
    $(".plus-icon").click(function () {
      console.log("hi");
    });
  }

  render() {
    return (
      <>
        <div className="portfolio">
          <div className="container text-center">
            <h1>PORTFOLIO COMPONENT</h1>
            <div className=" icons py-3 ">
              <div className="left-icon"></div>
              <FontAwesomeIcon className="star-icon " icon={faStar} />
              <div className="right-icon"></div>
            </div>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box   ">
                  <img
                    className="w-100"
                    src={require("./imgs/poert1.png")}
                    alt="porto-1"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      className="plus-icon fa-5x "
                      icon={faPlus}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box   ">
                  <img
                    className="w-100"
                    src={require("./imgs/port2.png")}
                    alt="porto-1"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      className="plus-icon fa-5x "
                      icon={faPlus}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box   ">
                  <img
                    className="w-100"
                    src={require("./imgs/port3.png")}
                    alt="porto-1"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      className="plus-icon fa-5x "
                      icon={faPlus}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box   ">
                  <img
                    className="w-100"
                    src={require("./imgs/poert1.png")}
                    alt="porto-1"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      className="plus-icon fa-5x "
                      icon={faPlus}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box   ">
                  <img
                    className="w-100"
                    src={require("./imgs/port2.png")}
                    alt="porto-1"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      className="plus-icon fa-5x "
                      icon={faPlus}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box   ">
                  <img
                    className="w-100"
                    src={require("./imgs/port3.png")}
                    alt="porto-1"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      className="plus-icon fa-5x "
                      icon={faPlus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay-image "></div>
        </div>
      </>
    );
  }
}
