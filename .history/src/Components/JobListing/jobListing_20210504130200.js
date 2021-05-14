import React, { useState } from 'react';
import fetchJob from './useFetchJob'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavigationBar/navigation';
import jobPost from './jobPost'
import Pagination from './joblistingPagination';
import {mockData} from './mockData'
// import Table from './table';


export default function JobListing(){
    
    // const jobTitle=props.titleJob;
    // const companyName=props.nameCompany;
    // const jobHours=props.hours;
    // const jobPay=props.pay;
    // const startDate=props.dateStart;
    // const jobDescription=props.description;
    // const listDate=props.dateList;

    // const jobTitle="Graduate developer";
    // const companyName="MapleLilly";
    // const jobHours="8 hours per day weekday";
    // const jobPay="22/hr";
    // const startDate="21/8/22";
    // const jobDescription="blablablablablablablacksheep";
    // const listDate="20/4/22";

    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const {jobs,loading, error, hasNextPage } = fetchJob(params, page)
  
    function handleParamChange(e) {
      const param = e.target.name
      const value = e.target.value
      setPage(1)
      setParams(prevParams => {
        return { ...prevParams, [param]: value }
      })
    }
   
        console.log(mockData.length);
  
    return(
        <div>
        <NavBar/>
        {/* <div class="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", paddingLeft:"50px", paddingTop:"50px"}}> */}
        {/* <Table
        data={Data}
        key={`${Data.companyname}-${Data.jobtitle}`}
        /> */}
        {/* <Table/> */}
        <Container className="my-4">
      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(jobPost => {
        return <jobPost key={jobPost.id} jobPost={jobPost} />
      })}
      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
        </div>
        
    );
}