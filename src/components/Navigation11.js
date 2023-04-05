import React, { useEffect, useRef, useState } from "react";
import seanFace from "../images/daBoss.png";
import * as bootstrap from "bootstrap";
import "../style.css";
window.bootstrap = bootstrap;

function NavTabs({ currentPage, handlePageChange }) {
  const lastScrollTop = useRef(0);
  const [isNevbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      setIsNavbarVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setIsNavbarVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="d-inline">
    <div className={`scrollNav ${isNevbarVisible ? "visible" : ""}`}>
      <div className="container-fluid">
        <a
          href="#homepage"
          onClick={() => handlePageChange("HomePage")}
          className={
            currentPage === "HomePage" ? "nav-link active" : "nav-link"
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
      <ul className="nav googleFont nav-items" style={{ fontSize: "20px" }}>
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
  );
}

export default NavTabs;
