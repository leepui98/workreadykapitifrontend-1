import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page12 = ( props ) => {

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
    <h3> Step 9 - Ability to Understand Health and Safety at Work{ /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Health and Safety is paramount in all workplaces. The panel will be interested
in your understanding of health and safety issues, whether you have a current
first aid certificate or other training and education that you have related to
health and safety.
Health and Safety processes are provided in a variety of ways e.g work place
induction, evacuation training, site signs, records, etc. Provide details and
evidence of the ways in which you have been involved with these processes
Use the space below to organise your thoughts. 

        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="How would you explain health and safety to an employee?">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page12;