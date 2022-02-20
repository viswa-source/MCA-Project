import React from "react";
import "./Navbar.css";

export default function NavBar() {
  return (
    // <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    //   <div
    //     class="collapse navbar-collapse d-flex justify-content-center"
    //     id="navbarTogglerDemo03"
    //   >
    //     <ul class="navbar-nav mr-auto mt-2 mt-lg-0  ">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="#Home">
    //           Home
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#About">
    //           About
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           Commercials
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarTogglerDemo03"
    //     aria-controls="navbarTogglerDemo03"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Periyar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#Home">
              Home 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
