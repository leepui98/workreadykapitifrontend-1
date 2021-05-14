import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavigationBar/navigation';
import Table from './table';


export default function jobListing(){
    return(
        <div>
        <NavBar/>
        <div class="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", paddingLeft:"50px", paddingTop:"50px"}}>
        <Table
        data={}
        propertyAsKey=''
        />
        </div>
        </div>
    );
}