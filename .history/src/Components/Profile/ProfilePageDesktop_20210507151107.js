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
            <div class="d-flex justify-content-center align-items-center col-xs-6" style={{height:"50", marginTop:"20px", paddingLeft:"60px", marginRight:"10px"}}>
            <ProfilePicture/>
            </div>
            <div class="d-flex justify-content-center align-items-center col-xs-6" className="infoBlockDesktop" style={{marginTop:"0px", width:"65%", paddingLeft:"15px", marginLeft:"5px"}}>
            <Col>
            <Infoblock name="Interest"/>
            <Infoblock name="Industry of Interest"/>
            </Col>
            </div>
            </div>
            </div>
        );
    }
