import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

const header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web development and websites</h1>

        <button className="contact-button">Get in Touch</button>
      </div>

    </div>
  );
};

export default header;
