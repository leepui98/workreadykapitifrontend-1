import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import CornerLogo from '../../../images/Corner-logo.png';

const Page11 = ( props ) => {

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
    <h3> Step 9 - Ability to Understand Health and Safety at Work { /* get full name prop from WorkReadyPassportHandler */}</h3>
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
        </Grid>
        </Grid>
        <br/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
    </body>
)

}
export default Page11;