import React, { useState } from "react";
import Navigation from "./Navigation";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Certificate from "./pages/Certificate";
import Service from "./pages/Service";
import Support from "./pages/Support";
import "../style.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("HomePage");

  const renderPage = () => {
    switch (currentPage) {
      case "HomePage":
        return <HomePage />;
      case "AboutUs":
        return <AboutUs />;
      case "Certificate":
        return <Certificate />;
      case "Service":
        return <Service />;
      default:
        return <Support />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav className="navbar themeBG">
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
      <div className="d-flex flex-column min-vh-100">{renderPage()}</div>
    </div>
  );
}
