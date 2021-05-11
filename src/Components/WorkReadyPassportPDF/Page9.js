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
    <h3> Step 6 - Drug Free { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Explain why it is important to be drug free in the work place. Use the space
below to prepare your thoughts around the job you are looking for. 
        </p>
        <br/>
        <h3 className='drug-free-title'>Why is it important
to be drug free in the
workplace?</h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'drugFree'} defaultValue={props.userInformation.drugFree}
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