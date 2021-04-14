import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page10 = ( props ) => {

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
    <h3> Step 7 - Work Experience { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        List here any work placement, or jobs you have done in the past two years.
Include part-time work, Gateway placement, work experience, community
projects, jobs / responsibilities around home, and school projects. What do
you enjoy about your work experience?
        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Don't forget to attach your references">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page10;