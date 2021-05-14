import React, { useState } from 'react';
import {Grid, IconButton} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './styling.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const PictureUploader = () => {
    const [{alt, src}, setImg] = useState({
        src: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        alt: 'Upload an Image'
    });
    

    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
            });    
        }   
    }

    return (
            <div className="form__img-input-container">
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                <img src={src} alt={alt} width = "280px" height = "300px" className="form-img"/>
                </Grid>
                <Grid item xs={12} >
                <input 
                    type="file"
                    id="img" 
                    accept=".png, .jpg, .jpeg" 
                    className="visually-hidden"
                    onChange={handleImg}
                />
                <label for="img">
                <IconButton color="primary" aria-label="upload picture" component="span" display="flex" alignItems="center"
        justifyContent="center">
          <PhotoCamera/>
        </IconButton>
        </label>
                </Grid>
                
                </Grid>
            </div>

    );
}

export default PictureUploader;
