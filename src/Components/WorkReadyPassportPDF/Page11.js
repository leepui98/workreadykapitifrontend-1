import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';

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
    <h2> <br/> Step 8 - Ability to Work as Part of a Team { /* get full name prop from WorkReadyPassportHandler */}</h2>
        <p>
        The ability to work as part of a team and communicate in a team environment
is important. List here activities such as sport, volunteer work in the community,
participation in the arts, kapa haka, work place or peer-support which you
have been involved with in the last two years.
        </p>
        <br/>
        <h3 className='teamwork-title'>How have you
used teamwork to
achieve a goal? </h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'teamWork'} defaultValue={props.userInformation.teamWork}
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
A team working well together accomplishes more than an individual. That’s why businesses employ the
best people.
Talent wins games, but teamwork and intelligence win championships.
</p>

        </Grid>
        <br/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page11;