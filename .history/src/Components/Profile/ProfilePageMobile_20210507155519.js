import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePicture from '../Profile_Picture/PictureUploader';
import Infoblock from './Infoblock';
import './_infoblockMobile.scss';
import SideNavbar from '../NavigationBar/sideNavigation';
import Col from 'react-bootstrap/Col';

export default function ProfilePageMobile(){
    
    return(
            <div>
            <SideNavbar/>
            <div class="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", paddingLeft:"50px", paddingTop:"50px"}}>
            <ProfilePicture />
            </div>
            <div class="d-flex justify-content-center align-items-center" className="infoBlockMobile" style={{width:"120%", marginLeft:"5px", paddingLeft:"30px" }}>
            <Col style={{paddingRight:"20px"}}>
            <div style={{marginBottom:"20px"}}>
            <Infoblock name="About Me"/>
            </div>
            <div style={{marginBottom:"20px"}}>
            <Infoblock name="Industry of Interest"/>
            </div>
            <div style={{marginBottom:"20px"}}>
            <Infoblock name="Contact Info"/>
            </div>
            </Col>
            </div>
            </div>
        );
    }
