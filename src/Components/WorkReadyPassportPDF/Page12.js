import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";

const Page11 = ( props ) => {

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
    <h2>         <br/>Step 9 - Understanding Health and Safety at Work { /* get full name prop from WorkReadyPassportHandler */}</h2>
        <p>
        Health and Safety is paramount in all workplaces. The panel will be interested in your understanding of health and safety issues, whether you have a current first aid certificate or other training and education that you have related to health and safety. Health and Safety processes are provided in a variety of ways e.g work place induction, evacuation training, site signs, records, etc. Provide details and evidence of the ways in which you have been involved with these processes Use the space below to organise your thoughts.
        </p>
        <br/>
        <h3 className='health-and-safety-title'>How would you explain health and safety to an employee?</h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'healthAndSafety'} defaultValue={props.userInformation.healthAndSafety}
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
You could ask an employer about how they manage workplace health and safety in their business.
What effect would Health and Safety have on the role you are applying for?
</p>

        </Grid>
        <br/>
        <Button id='nav-buttons' component={Link} to="/profile">Back to your profile</Button>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page11;