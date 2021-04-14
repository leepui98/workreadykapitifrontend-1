import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page8 = ( props ) => {

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
    <h3> Step 5 - Managing Your Money { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Consider how you will answer questions about managing your pay-packet
for the first 90 days, managing rent, power, food, transport, phone, internet,
try using sorted.co.nz.
How does the government and employers contribute to your KiwiSaver?
        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Do you know how
KiwiSaver can
contribute to buying
your first home?">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page8;