import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

const LogoUploader = () => {
    const [logo, setLogo] = useState();
    
    const handleLogo = (e) => {
        if(e.target.files[0]) {
            setLogo({
                logo: URL.createObjectURL(e.target.files[0]),
            });    
        }   
    }

    return (
            <div className="form__img-input-container">
            <Grid container spacing={5}>
                <Grid item xs={12}>
                <input 
                    type="file"
                    id="logoEmployer" 
                    onChange={handleLogo}
                />
                <label for="logoE">
               
        </label>
                </Grid>
                
                </Grid>
            </div>

    );
}

export default LogoUploader;
