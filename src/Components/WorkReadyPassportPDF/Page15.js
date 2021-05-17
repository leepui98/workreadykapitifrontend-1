import Button from "@material-ui/core/Button";
import * as React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";

const Page15 = ( props ) => {

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
<h2>        <br/> Step 12 - Character References { /* get full name prop from WorkReadyPassportHandler */}</h2>
<br/>
<h3>Please bring your
REFERENCES to the
mock interview</h3>
    <p>
    Please include a copy of your REFERENCES.
Ask someone you have worked for or a teacher or coach who knows you
well, to complete a character reference or work placement record for you.
Alternately bring a written reference on business headed paper, which
provides evidence of your good character, punctuality and timeliness, your
ability to work with others (including those from different culture) and fitness
for work. You are welcome to include more than one reference.
    </p>
    <br/>
    <div className='fields-container'>
    <h3> Reference #1</h3>
    <TextField
fullWidth
label="Full Name">
    </TextField>
    <TextField
fullWidth
label="Contact Information">
    </TextField>
    <h3><br/> Reference #2</h3>
    <TextField
fullWidth
label="Full Name">
    </TextField>
    <TextField
fullWidth
label="Contact Information">
    </TextField>
    <h3><br/> Reference #3</h3>
    <TextField
fullWidth
label="Full Name">
    </TextField>
    <TextField
fullWidth
label="Contact Information">
    </TextField>
    <br/>
    <br/>
    </div>
    </Grid>
    <br/>
    <Button id='nav-buttons' component={Link} to="/profile">Back to your profile</Button>
    <Button className= "Button" onClick={goBackward}>Previous Step</Button>
<Button className= "Button" onClick={goForward}>Next Step</Button>
</div>
)

}


 export default Page15;