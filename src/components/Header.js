import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="!#">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="!#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="!#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="!#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a href="!#" class="nav-link ">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header>
          <h1>Welcome to Blog Home!</h1>
          <p>A Bootstrap 5 starter layout for your next blog homepage</p>
        </header>
      </div>
    );
  }
}

export default Header;
