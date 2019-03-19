import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <strong className="spinner-header">Loading...</strong>
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Spinner;
