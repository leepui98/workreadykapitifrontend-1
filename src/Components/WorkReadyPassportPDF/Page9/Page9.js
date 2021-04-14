import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page9 = ( props ) => {

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
    <h3> Step 6 - Drug Free { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Explain why it is important to be drug free in the work place. Use the space
below to prepare your thoughts around the job you are looking for. 
        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Why is it important to be drug free in the workplace?">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page9;