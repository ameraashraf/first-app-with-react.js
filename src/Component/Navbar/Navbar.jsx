import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Navbar.css";

export default class Navbar extends Component {
  componentDidMount() {
    $(".nav-item").click(function () {
      $(this).css("background-color", "#1abc9c");
      $(this).nextAll().css("background-color", "transparent");
      $(this).prevAll().css("background-color", "transparent");

      console.log("hioffffffffff");
    });

    const navbarHeight = $("nav").outerHeight();
    console.log(navbarHeight);
    $(window).scroll(function () {
      if ($(window).scrollTop() > navbarHeight) {
        $("nav").removeClass("py-4");
      } else {
        $("nav").addClass("py-4");
      }
    });
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg fixed-top w-100   py-4 ">
          <div class="container">
            <Link class="navbar-brand text-white fs-2" to="home">
              START FRAMEWORK
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item rounded-3">
                  <Link
                    class="nav-link text-white mx-2    fw-bold"
                    aria-current="page"
                    to="about"
                  >
                    ABOUT
                  </Link>
                </li>
                <li class="nav-item rounded-3">
                  <Link
                    class="nav-link text-white mx-2    fw-bold"
                    to="portfolio"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li class="nav-item rounded-3">
                  <Link
                    class="nav-link text-white mx-2    fw-bold"
                    to="contact"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
