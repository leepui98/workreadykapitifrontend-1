import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavigationBar/navigation';
import ProfilePicture from '../Profile_Picture/PictureUploader';
import Infoblock from './Infoblock';
import './_infoblockDesktop.scss';

export default function ProfilePageDesktop (){

        return(
            <div>
            <NavBar/>
            <div class="d-flex justify-content-center align-items-center" style={{height:"100", marginTop:"10px", paddingLeft:"10px", marginRight:"20px"}}>
            <ProfilePicture/>
            <div class="d-flex justify-content-center align-items-center" className="infoBlockDesktop" style={{marginTop:"25px", width:"80%", paddingLeft:"50px"}}>
            <Infoblock/>
            </div>
            </div>
            
            </div>
        );
    }
