import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavigationBar/navigation';
import Table from './table';
import { propTypes } from 'react-bootstrap/esm/Image';


export default function jobListing(){

    // const jobTitle=props.titleJob;
    // const companyName=props.nameCompany;
    // const jobHours=props.hours;
    // const jobPay=props.pay;
    // const startDate=props.dateStart;
    // const jobDescription=props.description;
    // const listDate=props.dateList;

    const jobTitle="Graduate developer";
    const companyName="MapleLilly";
    const jobHours="8 hours per day weekday";
    const jobPay="22/hr";
    const startDate="21/8/22";
    const jobDescription="blablablablablablablacksheep";
    const listDate="20/4/22";


   let Data=[
       {
        jobtitle:jobTitle,
        companyname:companyName,
        jobhours:jobHours,
        jobpay:jobPay,
        startdate:startDate,
        jobdescription:jobDescription,
        listdate:listDate,
       }
   ]
   
   
   
    return(
        <div>
        <NavBar/>
        <div class="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", paddingLeft:"50px", paddingTop:"50px"}}>
        <Table
        data={Data}
        propertyAsKey={`${data.companyName}-${data.jobTitle}`}
        />
        </div>
        </div>
    );
}