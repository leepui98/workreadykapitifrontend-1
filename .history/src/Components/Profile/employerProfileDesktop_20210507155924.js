import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavigationBar/navigation';
import ProfilePicture from '../Profile_Picture/PictureUploader';
import Infoblock from './Infoblock';
import Col from 'react-bootstrap/Col';
import './_infoblockDesktop.scss';

export default function ProfilePageDesktop (){

        return(
            <div>
            <NavBar/>
            <div class="row">
            <div class="d-flex justify-content-center align-items-center col-xs-6" style={{height:"50", marginTop:"30px", paddingLeft:"60px", marginRight:"10px"}}>
            <ProfilePicture/>
            </div>
            <div class="d-flex justify-content-center align-items-center col-xs-6" className="infoBlockDesktop" style={{marginTop:"30px", width:"65%", paddingLeft:"15px", marginLeft:"5px"}}>
            <Col>
            <div style={{marginBottom:"20px"}}>
            <Infoblock name="Business Bio"/>
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
            </div>
        );
    }
