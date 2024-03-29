import React from 'react';
import ImageUploader from '../../Profile_Picture/PictureUploader';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import Button from "@material-ui/core/Button";
import {Link } from "react-router-dom";

const Page2 = ( props ) => {

const goForward = (e) => {
    props.goForward(e.target.value); //retrieve goForward method from props that were passed from WorkReadyPassportHandler
}

return (
    <div className="page-2-container">
<div>
    <Grid container spacing={2}>
    <Grid item xs = {12}>
    <h3> Upload a Photo of Yourself </h3>
<ImageUploader/>
</Grid>
<Grid item xs = {2}/>
<Grid item xs = {8}>
<TextField
label="Full Name" fullWidth>
</TextField>
<TextField
    label="Phone Number" fullWidth>
</TextField>
<TextField
label="Email Address" fullWidth>
</TextField>
</Grid>
<Grid item xs = {2}/>
<Grid item xs= {2}/>
<Grid item xs = {8} className='first-page-text-desc'>
    <div className='page-2-text-space'>
<h6>Foreword by Bryan Gundersen, Chair of the Kāpiti Youth Employment Foundation</h6>
(commonly referred to as Work Ready Kāpiti)
Welcome to the Work Ready Kāpiti Passport Workbook.
Work Ready Kāpiti’s mission is to help Kāpiti youth into jobs by building pathways to
employment and thereby assist in the development of the Kāpiti Coast as a strong and
vibrant community which is successful both economically and socially.
The Work Ready Kāpiti Passport programme provides a pathway to youth employment;
by completing the Passport Workbook you will develop the knowledge and skills that
are required by employers and illustrate that you have the work ethic and attitude which
makes you “work ready”.
We wish you the very best in your endeavours to obtain work.
</div>
</Grid>
<Grid item xs= {2}/>
</Grid>
</div>
<Link to="/profile"><Button>Back to your Profile</Button></Link>
<Button onClick={goForward}>Next Step</Button>
</div>
)
}
export default Page2;