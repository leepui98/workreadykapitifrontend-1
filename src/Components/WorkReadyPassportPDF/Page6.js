import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";

const Page6 = ( props ) => {

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
    <h2>         <br/>Step 3 - Communication { /* get full name prop from WorkReadyPassportHandler */}</h2>
        <p>
        Communication is simply the act of transferring information from one place to
another whether verbal, written or visual. Think about how you interact with
people in conversation. Do you make eye contact with people and do you
listen when being spoken to? Consider your written skills and the language
you use, both in writing and when speaking. Devices verse face to face – do
you prefer to talk or text? If we asked your friends how you communicate
what would they say?

        </p>
        <br/>
        <h3 className='communication-title'>How would
you communicate in
a workplace to
complete a task?</h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'communication'} defaultValue={props.userInformation.communication}
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
Consider your written skills and the language you use when communicating with an employer.
Have you used digital media to communicate? What was the result?
</p>

        </Grid>
        <br/>
        <Button id='nav-buttons' component={Link} to="/profile">Back to your profile</Button>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page6;