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
         
          <div className="d-flex justify-content-between">
                <input 
                    type="file"
                    id="logoEmployer" 
                    onChange={handleLogo}
                    style={{paddingTop:"10px"}}
                />
                <label for="logoE">
               
        </label>
        </div>
          

    );
}

export default LogoUploader;
