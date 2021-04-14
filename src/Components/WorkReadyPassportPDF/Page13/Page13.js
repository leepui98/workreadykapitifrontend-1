import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page13 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
    <h3> Step 10 - Restricted Drivers License Class 1 Endorsement { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Many jobs in our area need employees to have a restricted driver’s licence
and manual driving experience. If there is a legitimate reason why you cannot
progress your driver’s license please note that here, reasons may include
medical conditions or financial hardship. Please bring your NZTA licence
endorsements with you and list the details below. Do you have other NZTA
licence endorsements for example forklift or motorbike? 
        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Can you confidently drive a manual vehicle?">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page13;