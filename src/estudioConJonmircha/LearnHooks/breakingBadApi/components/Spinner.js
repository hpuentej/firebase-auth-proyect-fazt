import React from "react";
import './Spinner.css'

export const Spinner = () => {
  return (
    // <div>Loading...</div>
    <div className="lds-spinner self-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
