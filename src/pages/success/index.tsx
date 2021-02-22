import React,{useEffect, useState} from "react";
import "./index.scss";
import {Link, useLocation} from "react-router-dom"
import facebookPixelConversion from "../../utils/fbPixelConfig";
import { getMessage } from "../../utils/helperFunction";

const Success = () => {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    facebookPixelConversion("success")
  })

  const query = new URLSearchParams(useLocation().search).get("message") || ""
  
  useEffect(()=>{ 
    const msg = getMessage(query);
    setMessage(msg)
    
    // eslint-disable-next-line
  }, []) 

  return (
    <main>
      <div className="success-wrapper">
       
        <div className="success-container">
          <h1>Thank You !</h1>
          <p>
          {message}
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

export default Success;
