import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import logoDark from "../../images/logo-dark.png";

const index = (props: any) => {

  const HandleMobileMenu = (e: any) => {
    e.preventDefault();
    console.log("I am here!");
    let nav = document.querySelector('.menu-nav');
    let navLink = document.querySelector('.menu');
    let navText = navLink?.innerHTML;
    nav?.classList.toggle('show');
    navLink!.innerHTML = navText === 'Menu' ? 'close' : 'Menu';
    navLink?.classList.toggle('dark')
  }

  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <ul className="nav nav-left">
          <li className={props.class}><Link to="/program">Our Program</Link></li>
          <li className={props.class}><Link to="/testimonials">Testimonials</Link></li>
          <li className={props.class}><Link to="/faq">FAQ</Link></li>
          {/* <li><a className="btn" href="//decagonhq.com" target="_blank" rel="noopener noreferrer">Application closed</a></li> */}
        </ul>
        <ul className="nav nav-right">
          <li className={props.class}><a href="https://decagonhq.com/?p=fb">Build a Dev Team</a></li>
          {/* <li><a className="btn" href="//decagonhq.com" target="_blank" rel="noopener noreferrer">Application closed</a></li> */}
          <li><Link className="btn" to="/">Application Closed</Link><Link className="menu" to="/" onClick={HandleMobileMenu}>Menu</Link></li>
        </ul>
        <nav className="menu-nav">
          <li className={props.class}><Link to="/program">Our Program</Link></li>
          <li className={props.class}><Link to="/testimonials">Testimonials</Link></li>
          <li className={props.class}><Link to="/faq">FAQ</Link></li>
        </nav>
      </div>
    </header>
  )
}

export default index
