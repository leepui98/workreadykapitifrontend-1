import Button from "@material-ui/core/Button";
import React, { useEffect } from 'react';
import { Grid, Fade } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import CornerLogo from '../../../images/Corner-logo.png';


const Page3 = ( props ) => {

return (
    <body>
    <div>
        <Grid container spacing={2}>
        <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
    </Grid>
            <Grid item xs={12}>
    <h3> Congratulations for choosing to strive for the Work Ready Passport, {props.userInformation.fullName} { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Completing the Work Ready Passport will assist you to develop the knowledge and skills that are required by
employers.
        </p>
        <br/>
        <h3 className='employment-goals-title'>Employment Goals:</h3>
        <div className='textfield-container'>
        <TextField 
        multiline rows={12} variant="outlined" fullWidth onChange={props.handleChange} name={'employmentGoals'} defaultValue={props.userInformation.employmentGoals}>
</TextField>
        </div>
        </Grid>
        </Grid>
        <br/>
        <Button className= "Button" onClick={props.goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={props.goForward}>Next Step</Button>
    </div>
    </body>
)

}
export default Page3;