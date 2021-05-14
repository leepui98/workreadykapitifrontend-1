import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_navigation.scss";
import { Nav, Navbar, NavLink} from "react-bootstrap";
import Pic from "../../images/WorkReadyKapitiTextBlack.jpg"

// const navLinks = [
//   { title: "Profile", path: "/profile" },
//   { title: "JobListing", path: "/joblisting" },
//   { title: "MeetUp", path: "/meetup" },
// ];

// const logoutLinks = {
//   title: "Logout",
//   path: "/logout",
// };

export default function navigation() {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand >
          <img
          src={Pic}
            alt="Kapiti Logo"
            width="180"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav>
        <Nav.Link className="navitem" href="/profile">Profile</Nav.Link>
        <Nav.Link className="navitem" href="/joblisting">JobListing</Nav.Link>
        <Nav.Link className="navitem" href="/meetup">MeetUp</Nav.Link>
        <Nav.Link className="navitem" href="/logout">Logout</Nav.Link>
        </Nav>
          
      </Navbar>
  );
}
