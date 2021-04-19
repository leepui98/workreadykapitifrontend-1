import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import CornerLogo from '../../../images/Corner-logo.png';

const Page6 = ( props ) => {

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
    <h3> Step 4 - Academic Achievements { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Provide details of all academic courses and training you have finished. Your NZQA Record of Learning provides complete information about the achievement and unit standards that you have been assessed against. Please bring an up-to-date print out of this with you to the assessment. You will be able to access this from your school, tertiary education provider or from NZQA.



        </p>
        <br/>
        <h3 className='personal-wellness-title'>List any courses
and/or qualifications
you have completed
below.</h3>
        <div className="textfield-container">
        <TextField
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
export default Page6;