import React, { Component } from "react";
import contactCss from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

export default class Contact extends Component {
  componentDidMount() {
    // $("input").keyup(function () {
    //   // console.log("offfffffffffff");
    //   if ($("input").val() === "") {
    //     $(this).prev().css("top", "0px");
    //   } else {
    //     $(this).prev().css("top", "40px");
    //   }
    // });

    $("input").keyup(function () {
      if ($("input").val() !== "") {
        $(this).prev().show(500);
      } else {
        $(this).prev().hide(500);
      }
    });
  }

  render() {
    return (
      <>
        <div className={contactCss.contact}>
          <div className="contact-info text-center ">
            <h1>CONTACT SECTION</h1>
            <div className=" icons d-flex align-items-center justify-content-center py-3 ">
              <div className={contactCss.left}></div>
              <FontAwesomeIcon className="star-icon " icon={faStar} />
              <div className={contactCss.right}></div>
            </div>
          </div>
          <div className="container w-50 ">
            <div className="form py-1 d-flex justify-content-center  flex-column ">
              <label className={contactCss.label} htmlFor="name">
                User Name :
              </label>
              <input
                className={contactCss.contactInput}
                type="text"
                placeholder="userName"
                name="uName"
                id="name"
              />
            </div>
            <div className="form py-1 d-flex justify-content-center flex-column ">
              <label className={contactCss.label} htmlFor="name">
                User Age :
              </label>
              <input
                className={contactCss.contactInput}
                type="number"
                placeholder="userAge"
                name="uAge"
                id="Age"
              />
            </div>
            <div className="form py-1 d-flex justify-content-center flex-column ">
              <label className={contactCss.label} htmlFor="mail">
                User Email :
              </label>
              <input
                className={contactCss.contactInput}
                type="text"
                placeholder="userEmail"
                name="uEmail"
                id="mail"
              />
            </div>
            <div className="form py-1 d-flex justify-content-center flex-column">
              <label className={contactCss.label} htmlFor="name">
                User Password :
              </label>
              <input
                className={contactCss.contactInput}
                type="password"
                placeholder="userPassword"
                name="uPass"
                id="pass"
              />
            </div>
            <button className={contactCss.buttonOn + " " + "mt-3"}>
              Send Message``
            </button>
          </div>
        </div>
      </>
    );
  }
}
