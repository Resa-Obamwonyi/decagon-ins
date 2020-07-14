import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo-institute.png"
import wlogo from "../../images/logo-institute-white.png"
const index = (props: any) => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/">{props.home ? <img src={wlogo} alt="logo" /> : <img src={logo} alt="logo" />}</Link>
        </div>
        <ul className="nav">
          <li><Link to="/faq" className={props.home ? '' : 'blackText'}>FAQ</Link></li>
          {/* <li><a className="btn" href="//decagonhq.com" target="_blank">Application closed</a></li> */}
          <li><Link className="btn" to="/apply">Apply</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default index





