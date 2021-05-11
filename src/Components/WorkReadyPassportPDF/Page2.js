import React from 'react';
import ImageUploader from '../Profile_Picture/PictureUploader';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import CornerLogo from '../../images/Corner-logo.png';
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";

const Page2 = ( props ) => {


return (
    <div>
<Grid container spacing={2}>
    <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
    </Grid>
    <Grid item xs={12}>
        <br/>
        <h2>Welcome to Your Digitized Kapiti Work Ready Passport</h2>
        <br/>
<ImageUploader 
handleChange={props.handleChange}
userInformation={props.userInformation}
setUploadedImage={props.setUploadedImage}
/>
</Grid>
<Grid item xs={12}>
<TextField
label="Full Name" fullWidth onChange={props.handleChange} name={'fullName'} defaultValue={props.userInformation.fullName}>
</TextField>
<TextField
    label="Phone Number" fullWidth onChange={props.handleChange} name={'phoneNumber'} defaultValue={props.userInformation.phoneNumber}>
</TextField>
<TextField
label="Email Address" fullWidth onChange={props.handleChange} name={'email'} defaultValue={props.userInformation.email}>
</TextField>
</Grid>
<Grid item xs={12}>
    <br></br>
    <div className='foreword-wrapper'>
<h6>Welcome to the Work Ready Kāpiti Passport Workbook.</h6>
<p>
Work Ready Kāpiti’s mission is to help Kāpiti youth into jobs by building pathways to
employment and thereby assist in the development of the Kāpiti Coast as a strong and
vibrant community which is successful both economically and socially.
The Work Ready Kāpiti Passport programme provides a pathway to youth employment;
by completing the Passport Workbook you will develop the knowledge and skills that
are required by employers and illustrate that you have the work ethic and attitude which
makes you “work ready”.
We wish you the very best in your endeavours to obtain work.</p>
<p>Foreword by Bryan Gundersen, Chair of the Kāpiti Youth Employment Foundation (commonly referred to as Work Ready Kāpiti)</p>
</div>
</Grid>
<Button id='nav-buttons' component={Link} to="/profile"><br/>Back to your profile</Button>
<Button id='nav-buttons' onClick={props.goForward}><br/>Next Step</Button>
</Grid>
</div>
)
}
export default Page2;