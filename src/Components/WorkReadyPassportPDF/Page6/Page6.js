import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page6 = ( props ) => {

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
    <h3> Step 3 - Communication { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Communication is simply the act of transferring information from one place to
another whether verbal, written or visual. Think about how you interact with
people in conversation. Do you make eye contact with people and do you
listen when being spoken to? Consider your written skills and the language
you use, both in writing and when speaking. Devices verse face to face – do
you prefer to talk or text? If we asked your friends how you communicate
what would they say?

        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="How would
you communicate in
a workplace to
complete a task?">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page6;