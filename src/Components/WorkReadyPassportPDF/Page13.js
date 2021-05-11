import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';

const Page13 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <body>
    <div>
        <Grid container spacing={2}>
        <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
    </Grid>
            <Grid item xs={12}>
    <h3> Step 10 - Restricted Drivers License Class 1 Endorsement{ /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Many jobs in our area need employees to have a restricted driver’s licence and manual driving experience.
         If there is a legitimate reason why you cannot progress your driver’s license please note that here, reasons 
         may include medical conditions or financial hardship. Please bring your NZTA licence endorsements with you and 
         list the details below. Do you have other NZTA licence endorsements for example forklift or motorbike?
        </p>
        <br/>
        <h3 className='driving-title'>Can you confidently
drive a manual vehicle? </h3>
        <div className="textfield-container">
        <TextField
            onChange={props.handleChange} name={'driversLicense'} defaultValue={props.userInformation.driversLicense}
        multiline 
rows={12}
variant="outlined"
fullWidth
>
        </TextField>
        </div>
        </Grid>
        </Grid>
        <br/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
    </body>
)

}
export default Page13;