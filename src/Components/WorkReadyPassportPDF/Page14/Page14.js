import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import UploadCV from '../../CV_Uploader/CVUploader';

const Page14 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
    <h3> Step 11 - Targeted CV { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        A TARGETED CV is a written overview of a person’s experience and other
qualifications relevant to a job opportunity you have selected. Typically,
this is the first item an employer reads after your cover letter. It provides a
clear summary of your learning, so an employer can match your skills and
knowledge to the job vacancy. Use the targeted CV as a guide for you
during an interview. 
        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Enter your Targeted CV here. Alternatively, upload it using the 'Upload CV' button below.">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <UploadCV/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page14;