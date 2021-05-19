import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './sideNavigation.scss';
import { Nav, Navbar, NavLink} from "react-bootstrap";
import Pic from "../../images/WorkReadyKapitiTextBlack.jpg"

// const navLinks = [
//     { title: "Profile", path: "/profile" },
//     { title: "JobListing", path: "/joblisting" },
//     { title: "MeetUp", path: "/meetup" },
//   ];
  
//   const logoutLinks = {
//     title: "Logout",
//     path: "/logout",
//   };

//   export default function Sidenavigation() {
//     const[menuActive, setMenuActive] = useState(false)
//     return (
//       <nav class="navbar navbar-light bg-light" className="sideNavigation">
//           <img 
//           src="/images/WorkReadyKapitiTextBlack.jpg"
//           class="navbar-brand d-inline-block align-top"
//           className="logo"
//         />
//          <div className= {`menu-content-container ${menuActive && 'active'}`}>
//         <ul class="nav justify-content-center mx-auto">
//           {navLinks.map((link, index) => (
//             <li class="nav-item " key={index} className="limenu">
//               {/* <Link to={link.path}> {link.title}</Link> */}
//               {link.title}
//             </li>
//           ))}
//         </ul>
//         <ul class="nav justify-content-end">
//         <li class="nav-item" key={logoutLinks.title} className="lilogout" >
//             {logoutLinks.title}
//           </li>
//         </ul>
//         </div>
//         {/* <i className="ionicons icon ion-ios-menu" onClick={ () => setMenuActive(!menuActive)} /> */}
//       </nav>
//     );
//   }


{/* <nav class="navbar navbar-light light-blue lighten-4" className="sideNavigation">
//              <img  */}
//           src="../images/WorkReadyKapitiTextBlack.jpg"
//           class="navbar-brand d-inline-block align-top"
//           className="logo"
//         />
//          <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
//     aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" className="navbutton" ><span class="dark-blue-text"><i
//         class="fas fa-bars fa-1x"></i></span></button>

// <div class="collapse navbar-collapse" id="navbarSupportedContent1">
// <ul class="navbar-nav mr-auto">
//            {navLinks.map((link, index) => (
//             <li class="nav-item active " key={index} className="limenu">
//               {/* <Link to={link.path}> {link.title}</Link> */}
//               {link.title}
//             </li>
//           ))}
//         </ul>
//         <ul class="navbar-nav mr-auto">
//         <li class="nav-item active" key={logoutLinks.title} className="lilogout" >
//             {logoutLinks.title}
//           </li>
//         </ul>
//     </div>

//             </nav>
export default function Sidenavigation() {
   
    return (

        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >
          <img
          src={Pic}
            alt="Kapiti Logo"
            width="180"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav" className="expandNav" >
        <Nav.Link className="navitem" href="/profile">Profile</Nav.Link>
        <Nav.Link className="navitem" href="/joblisting">JobListing</Nav.Link>
        <Nav.Link className="navitem" href="/meetup">MeetUp</Nav.Link>
        <Nav.Link className="navitem" href="/passport">Passport</Nav.Link>
        <Nav.Link className="navitem" href="/logout">Logout</Nav.Link>
          
          {/* {navLinks.map((link, index) => (
             <Nav className="ml-auto" key={index} id='lis'>{link.title}</Nav>
          ))}
          
          <Nav key={logoutLinks.title} className="ml-auto" id="lis" >
          {logoutLinks.title} 
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>

    );
  }

  
  
  
 