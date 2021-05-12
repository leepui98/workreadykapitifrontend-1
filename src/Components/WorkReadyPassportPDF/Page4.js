import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';

const Page4 = ( props ) => {

return (
    <div>
        <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
    </Grid>
            <Grid item xs={12}>
    <h2>        <br/> Step 1 - Personal Wellness { /* get full name prop from WorkReadyPassportHandler */}</h2>
        <p>
        You will be asked questions about your commitment to a healthy lifestyle,
including physical activity, eating and drinking habits and your sleep patterns.
Use this space to develop your thoughts in preparation for questions about
this crucial area. What sports do you participate in? For example, are you
are member of a sports club or gym? If a student, you may find some of
the material that you have covered in the Health and Physical Education
curriculum useful as you consider your ideas about this. 

        </p>
        <br/>
        <h3 className='personal-wellness-title'>How would you stay healthy to maintain your employment?</h3>
        <div className="textfield-container">
        <TextField
        multiline 
rows={12}
variant="outlined"
fullWidth
onChange={props.handleChange} name={'personalWellness'} defaultValue={props.userInformation.personalWellness}
>
        </TextField>
        </div>
        <br/>
        </Grid>
        <Grid item xs={12} className='handy-hints'>
<h6 className='handy-hints-heading'>Handy Hints
</h6>
<p className='handy-hints-desc'>
Manage personal diet, exercise and sleeping so you are work ready each day.
</p>

        </Grid>
        <br/>
        <Button className= "Button" onClick={props.goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={props.goForward}>Next Step</Button>
    </div>
)

}
export default Page4;