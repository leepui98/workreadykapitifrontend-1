import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePicture from '../Profile_Picture/PictureUploader';
import Infoblock from './Infoblock';
import './_infoblockMobile.scss';
import SideNavbar from '../NavigationBar/sideNavigation';


export default function ProfilePageMobile(){
    
    return(
            <div>
            <SideNavbar/>
            <div class="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", paddingLeft:"50px", paddingTop:"50px"}}>
            <ProfilePicture />
            </div>
            <div class="d-flex justify-content-center align-items-center" className="infoBlockMobile" style={{width:"80%"}}>
            <Infoblock />
            </div>
            </div>
        );
    }
