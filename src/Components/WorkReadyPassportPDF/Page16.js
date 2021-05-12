import Button from "@material-ui/core/Button";
import * as React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SignatureCanvas from 'react-signature-canvas';
import CornerLogo from '../../images/Corner-logo.png';

const Page16 = ( props ) => {

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
<h2>        <br/> Lastly - The Registration Form for Interviews. { /* get full name prop from WorkReadyPassportHandler */}</h2>
    <div className='fields-container'>
    <TextField
fullWidth
label="Full Name">
    </TextField>
    <TextField
fullWidth
label="Date of Birth">
    </TextField>
    <TextField
fullWidth
label="Phone">
    </TextField>
    <TextField
fullWidth
label="Email">
    </TextField>
    <TextField
fullWidth
label="NZQA / NSN">
    </TextField>
    <TextField
fullWidth
label="Gender">
    </TextField>
    <TextField
fullWidth
label="Ethnicity">
    </TextField>
    <TextField
fullWidth
label="What Job are you Looking For?">
    </TextField>
    <TextField
fullWidth
label="Which City?">
    </TextField>
   
    <h3> <br/>Draw your electronic signature on the canvas below.</h3>
    <div className='signature-container'>
    <SignatureCanvas penColor='green' className='signature-area'
    canvasProps={{ className: 'sigCanvas'}} />
    </div>
    </div>
    </Grid>
    <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Last Step</Button>
</div>
)

}


 export default Page16;