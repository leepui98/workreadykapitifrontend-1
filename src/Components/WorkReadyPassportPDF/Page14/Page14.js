import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import CornerLogo from '../../../images/Corner-logo.png';
import CVUploader from '../../CV_Uploader/CVUploader';

const Page13 = ( props ) => {

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
    <h3> Step 11 - Targeted CV { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        A TARGETED CV is a written overview of a person’s experience and other qualifications relevant to a job opportunity you have selected. 
        Typically, this is the first item an employer reads after your cover letter. It provides a clear summary of your learning, so an
         employer can match your skills and knowledge to the job vacancy. Use the targeted CV as a guide for you during an interview.
        </p>
        <br/>
        <h3 className='cv-title'>Please bring your
TARGETED CV to the
work ready passport
interview, or Upload it below. </h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'cv'} defaultValue={props.userInformation.cv}
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
        <CVUploader/>
        <br/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
    </body>
)

}
export default Page13;