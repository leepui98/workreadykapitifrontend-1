import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page7 = ( props ) => {

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
    <h3> Step 4 - Academic Achievements { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Provide details of all academic courses and training you have finished.
Your NZQA Record of Learning provides complete information about the
achievement and unit standards that you have been assessed against.
Please bring an up-to-date print out of this with you to the assessment.
You will be able to access this from your school, tertiary education provider
or from NZQA.

        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Academic Achievements">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page7;