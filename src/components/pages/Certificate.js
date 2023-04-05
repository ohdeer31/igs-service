import React from "react";
import certificate from "../../images/certificate.png";

export default function Certificate() {
  return (
    <div>
      <header>
        <h1>This is certificate page</h1>
      </header>
      <div className="d-flex justify-content-center certiPage">
        <img src={certificate} alt="certificate" className="m-3"></img>
        <div className="m-3">
          <h3>IGS ISO Certificate</h3>
          <h6>explain this</h6>
        </div>
      </div>
    </div>
  );
}
