import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavigationBar/navigation';
import ProfilePicture from '../Profile_Picture/PictureUploader';
import Infoblock from './Infoblock';

export default class ProfilePage extends React.Component{
    render(){
        return(
            <div>
            <NavBar/>
            <div class="d-flex justify-content-center align-items-center" style={{height:"100"}}>
            <ProfilePicture/>
            </div>
            <Infoblock/>
            </div>
        );
    }
}