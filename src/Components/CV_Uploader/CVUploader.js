import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

const CVUploader = () => {
    const [CV, setCV] = useState();
    
    const handleCV = (e) => {
        if(e.target.files[0]) {
            setCV({
                CV: URL.createObjectURL(e.target.files[0]),
            });    
        }   
    }

    return (
            <div className="form__img-input-container">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <input 
                    type="file"
                    accept=".pdf, .docx"
                    id="cv" 
                    onChange={handleCV}
                />
                <label for="cv">
               
        </label>
                </Grid>
                
                </Grid>
            </div>

    );
}

export default CVUploader;
