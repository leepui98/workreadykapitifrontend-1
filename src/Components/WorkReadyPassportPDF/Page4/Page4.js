import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page4 = ( props ) => {

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
    <h3> Step 1 - Personal Wellness { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        You will be asked questions about your commitment to a healthy lifestyle,
including physical activity, eating and drinking habits and your sleep patterns.
Use this space to develop your thoughts in preparation for questions about
this crucial area. What sports do you participate in? For example, are you
are member of a sports club or gym? If a student, you may find some of
the material that you have covered in the Health and Physical Education
curriculum useful as you consider your ideas about this. 

        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="How would you
stay healthy to maintain
your employment?">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page4;