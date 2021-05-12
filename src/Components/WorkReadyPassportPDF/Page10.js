import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';

const Page10 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <div>
        <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
    </Grid>
            <Grid item xs={12}>
    <h2>         <br/>Step 7 - Work Experience { /* get full name prop from WorkReadyPassportHandler */}</h2>
        <p>
        List here any work placement, or jobs you have done in the past two years.
Include part-time work, Gateway placement, work experience, community
projects, jobs / responsibilities around home, and school projects. What do
you enjoy about your work experience?
        </p>
        <br/>
        <h3 className='personal-wellness-title'>Don’t forget
to attach your
references. </h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'workExperience'} defaultValue={props.userInformation.workExperiences}
        multiline 
rows={12}
variant="outlined"
fullWidth
>
        </TextField>
        </div>
        <br/>
        </Grid>
        <Grid item xs={12} className='handy-hints'>
<h6 className='handy-hints-heading'>Handy Hints
</h6>
<p className='handy-hints-desc'>
This can be any role, even community events.
</p>

        </Grid>
        <br/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page10;