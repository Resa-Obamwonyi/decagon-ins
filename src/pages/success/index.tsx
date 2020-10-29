import React from "react";
import "./index.scss";
import {Link} from "react-router-dom"

const index = (props: any) => {
  return (
    <main>
      <div className="success-wrapper">
       
        <div className="success-container">
          <h1>Thank You !</h1>
          <p>
          You have Successfully applied to Decagon! Kindly check your email for confirmation
          </p>
          <div className="back-button">
              <Link to="/">
              <button className="btn-back">Back to Home</button>
              </Link>
        </div>
        </div>
        
      </div>
    </main>
  );
};

export default index;
