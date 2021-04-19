import React from 'react';
import ImageUploader from '../../Profile_Picture/PictureUploader';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import Button from "@material-ui/core/Button";
import CornerLogo from '../../../images/Corner-logo.png';

const Page2 = ( props ) => {

const goForward = (e) => {
    props.goForward(e.target.value); //retrieve goForward method from props that were passed from WorkReadyPassportHandler
}

return (
    <body>
<Grid container spacing={2} className='grid-container'>
    <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
    </Grid>
    <Grid item xs={12}>
        <br/>
        <h3>Welcome to Your Digitized Kapiti Work Ready Passport.</h3>
        <br/>
<ImageUploader/>
</Grid>
<Grid item xs={12}>
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
<p className="foreword">Foreword by Bryan Gundersen, Chair of the Kāpiti Youth Employment Foundation (commonly referred to as Work Ready Kāpiti)</p>
</div>
</Grid>
<Button><br/>Back to your Profile</Button>
<Button onClick={goForward}><br/>Next Step</Button>
</Grid>
</body>
)
}
export default Page2;