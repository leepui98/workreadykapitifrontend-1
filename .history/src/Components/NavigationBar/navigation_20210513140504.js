import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,Navbar} from 'react-bootstrap';
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
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand >
          <img
          src={"./images/WorkReadyKapitiTextBlack.jpg"}
            alt="Kapiti Logo"
            width="180"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="justify-content-center m-auto">
        <Nav.Item>
        <Nav.Link className="navitemd" href="/profile" >Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="navitemd" href="/joblisting">JobListing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="navitemd" href="/meetup">MeetUp</Nav.Link>
        </Nav.Item>
        <Nav.Link className="navitemd" href="/passport">Passport</Nav.Link>
        </Nav>
       <Nav>
        <Nav.Link  href="/logout">Logout</Nav.Link>
        </Nav>
          
      </Navbar>
  );
}
