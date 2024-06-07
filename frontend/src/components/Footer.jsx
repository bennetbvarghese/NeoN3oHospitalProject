import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 12:00 AM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "9:00 AM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "9:00 AM - 12:00 AM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 12:00 AM",
    },
    {
      id: 5,
      day: "Friday",
      time: "9:00 AM - 12:00 AM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 12:00 AM",
    },
    {
      id: 7,
      day: "Sunday",
      time: "12:00 AM - 12:00 AM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>000-0000-000</span>
            </div>
            <div>
              <MdEmail />
              <span>nhospital@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Somewhere,In the World</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;