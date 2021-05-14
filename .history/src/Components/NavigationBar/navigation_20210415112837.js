import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_navigation.scss";

const navLinks = [
  { title: "Profile", path: "/profile" },
  { title: "JobListing", path: "/joblisting" },
  { title: "MeetUp", path: "/meetup" },
];

const logoutLinks = {
  title: "Logout",
  path: "/logout",
};

export default function navigation() {
  return (
    <nav class="navbar navbar-light bg-light">
        <img 
        src="/images/WorkReadyKapitiTextBlack.jpg"
        class="navbar-brand d-inline-block align-top"
        className="logo"
      />
      <ul class="nav justify-content-center mx-auto">
        {navLinks.map((link, index) => (
          <li class="nav-item " key={index} className="limenu">
            {/* <Link to={link.path}> {link.title}</Link> */}
            {link.title}
          </li>
        ))}
      </ul>
      <ul class="nav justify-content-end">
      <li class="nav-item" key={logoutLinks.title} className="lilogout" >
          {logoutLinks.title}
        </li>
      </ul>
    </nav>
  );
}
