import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';

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
    <h3> Step 3 - Communication { /* get full name prop from WorkReadyPassportHandler */}</h3>
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