import React from "react";
import seanFace from "../images/daBoss.png";
import * as bootstrap from "bootstrap";
import "../style.css";
window.bootstrap = bootstrap;

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="d-inline d-flex mx-3">
      <div>
        {/* <div className="container-fluid"> */}
        <a
          href="#homepage"
          onClick={() => handlePageChange("HomePage")}
          className={
            currentPage === "HomePage"
            // currentPage === "HomePage" ? "nav-link active" : "nav-link"
          }
        >
          <img
            src={seanFace}
            alt="Logo"
            width="40"
            height="55"
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
      <div className="rightNav p-2">
        <ul className="nav" style={{ fontSize: "20px" }}>
          <li className="nav-item">
            <a
              href="#aboutus"
              onClick={() => handlePageChange("AboutUs")}
              className={
                currentPage === "AboutUs" ? "nav-link active" : "nav-link"
              }
            >
              AboutUs
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#certificate"
              onClick={() => handlePageChange("Certificate")}
              className={
                currentPage === "Certificate" ? "nav-link active" : "nav-link"
              }
            >
              Certificate
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#service"
              onClick={() => handlePageChange("Service")}
              className={
                currentPage === "Service" ? "nav-link active" : "nav-link"
              }
            >
              Service
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#support"
              onClick={() => handlePageChange("Support")}
              className={
                currentPage === "Support" ? "nav-link active" : "nav-link"
              }
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavTabs;
