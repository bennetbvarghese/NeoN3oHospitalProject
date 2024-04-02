import React from 'react'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import { toast } from "react-toastify";
// import { Context } from "../main";
const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div >
          <div className="links">
            <Link to={"/"} >
              Home
            </Link>
            <Link to={"/appointment"} >
              Appointment
            </Link>
            <Link to={"/about"} >
              About Us
            </Link>
          </div>
            <button className="logoutBtn btn" >
              LOGOUT
            </button>
            <button className="loginBtn btn" >
              LOGIN
            </button>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  )
}

export default Navbar