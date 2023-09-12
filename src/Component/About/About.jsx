import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import aboutCss from "./About.module.css";
import Home from "../Home/Home";
import homeCss from "../Home/Home.module.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className={aboutCss.about}>
          <div className="container text-center">
            <div className="about-info">
              <h1>ABOUT COMPONENT</h1>
              <div className={homeCss.icons + " " + "py-3"}>
                <div className={aboutCss.left}></div>
                <FontAwesomeIcon className="star-icon " icon={faStar} />
                <div className={aboutCss.right}></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="about-content">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
