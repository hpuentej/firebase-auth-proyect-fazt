import React from "react";
import "./Position.css";

export const Position = () => {
  return (
    <>
      <div className="container">
        <button className="button button--blue">Button</button>
        <button className="button button--red">Button</button>
        <button className="button button--orange">Button</button>
        <button className="button button--blue button--lightBlue">Button</button>
        <button className="button button--red button--lightRed">Button</button>
        <button className="button button--orange button--lightOrange">Button</button>
      </div>
    </>
  );
};
