import React, { Component } from "react";
import "./Down.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class Down extends Component {
  render() {
    return (
      <>
        <div className="content-info">
          <div className="container">
            <div className="row gy-4">
              <div className="col-md-4 ">
                <div className="content-box text-white text-center">
                  <h3>LOCATION</h3>
                  <p className="">2215 John Daniel Drive</p>
                  <span>Clark, MO 65243</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content-box text-white text-center">
                  <h3>AROUND THE WEB</h3>
                  <div className="social-icons d-flex justify-content-center align-items-center   ">
                    <div className="icon  mx-1   ">
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="icon mx-1  ">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="icon mx-1  ">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="icon mx-1  ">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content-box text-white text-center">
                  <h3 className="">ABOUT FREELANCER</h3>
                  <p className="">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center">
          <p className="text-white">Copyright &copy; Your Website 2021</p>
        </footer>
      </>
    );
  }
}
