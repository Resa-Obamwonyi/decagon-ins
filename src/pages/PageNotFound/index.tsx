import React from "react";
import "./index.scss";

const NotFound = () => {

  return (
    <main>
      <div className="wrapper">
        <div className="container">
          <h1 className="font-muli font-bold">404 : Page not found</h1>
          <div className="back-button">
            <a href="/">
              <button className="btn-back">Back to Home</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
