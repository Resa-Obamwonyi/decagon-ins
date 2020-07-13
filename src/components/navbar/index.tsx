import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo-decabelle.png"
const index = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <ul className="nav">
          <li><Link to="/faq">FAQ</Link></li>
          <li><a className="btn" href="//decagonhq.com" target="_blank">Application closed</a></li>
          {/* <li><Link className="btn" to="/apply">Application closed</Link></li> */}
        </ul>
      </div>
    </header>
  )
}

export default index





