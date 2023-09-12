import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import homeCss from "./Home.module.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className={homeCss.home}>
          <div className=" container text-center  ">
            <div className="home-content text-white ">
              <img
                className={"mb-4" + " " + homeCss.homeImage}
                src={require("../Home/imgs/c43f25e59a724e0ae7331682f5e65899.jpg")}
                alt="home-img"
              />
              <h1 className="py-2">START FRAMEWORK</h1>
              <div className={homeCss.icons}>
                <div className={homeCss.leftIcon}></div>

                <FontAwesomeIcon icon={faStar} />
                <div className={homeCss.rightIcon}></div>
              </div>
              <p className="py-3">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
