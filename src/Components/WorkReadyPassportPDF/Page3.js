import Button from "@material-ui/core/Button";
import React, { useEffect } from 'react';
import { Grid, Fade } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';

const Page3 = ( props ) => {

return (
    <div>
        <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
    </Grid>
            <Grid item xs={12}>
    <h2>        <br/> Congratulations for choosing to strive for the Work Ready Passport, {props.userInformation.fullName} { /* get full name prop from WorkReadyPassportHandler */}</h2>
        <p>
        Completing the Work Ready Passport will assist you to develop the knowledge and skills that are required by
employers.
        </p>
        <br/>
        <h3>Employment Goals:</h3>
        <div className='textfield-container'>
        <TextField 
        multiline rows={12} variant="outlined" fullWidth onChange={props.handleChange} name={'employmentGoals'} defaultValue={props.userInformation.employmentGoals}>
</TextField>
        </div>
        <br/>
        </Grid>
        <Grid item xs={12}>
        <div className='foreword-wrapper'>
<h6>The Work Ready Passport captures five key
employability skills identified by employers: <p>
• Resourceful
• Enterprising
• Adaptable
• Drive
• Dynamic </p> 
</h6>
<p>
Your Work Ready Passport will help you collect and
summarises information for your targeted CV.
To give you the best chance of success present
your targeted CV to the panel as questions from
the interview will relate to your job of choice. For
example, what’s your understanding of work place
health and safety for the job you have identified?
This panel meets as required so that you can be
assessed for the Passport as soon as you are ready.
</p>
</div>
        </Grid>
        <br/>
        <Button id='nav-buttons' onClick={props.goBackward}>Previous Step</Button>
    <Button id='nav-buttons' onClick={props.goForward}>Next Step</Button>
    </div>
)

}
export default Page3;