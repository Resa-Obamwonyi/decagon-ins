import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import logoDark from "../../images/logo-dark.png";

const index = (props: any) => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/"><img src={props.class ? logoDark : logo} alt="logo" /></Link>
        </div>
        <ul className="nav">
          <li className={props.class}><Link to="/faq">FAQ</Link></li>
          <li><a className="btn" href="//decagonhq.com" target="_blank" rel="noopener noreferrer">Application closed</a></li>
          {/* <li><Link className="btn" to="/apply">Apply</Link></li> */}
        </ul>
      </div>
    </header>
  )
}

export default index





