import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './cardBlock';
import NavBar from '../NavigationBar/navigation';

export default function jobListing(){
    return(
        <div>
        <NavBar/>
        <div class="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", paddingLeft:"50px", paddingTop:"50px"}}>
        <Card/>
        </div>
        </div>
    );
}