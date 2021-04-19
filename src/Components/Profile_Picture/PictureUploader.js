import React, { useState } from 'react';
import {Grid, IconButton} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './styling.css';

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
        <div className="picture-container">
                <div className = "img-container">
                <img src={src} alt={alt} className="form-img"/>
                </div>
                <input className="form-img"
                    type="file"
                    id="img" 
                    accept=".png, .jpg, .jpeg" 
                    className="visually-hidden"
                    onChange={handleImg}
                    alignItems="center"
                    component="span" display="flex"
                />
                <br></br>
                <label for="img">
                <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera/>
        </IconButton>
        </label>
        </div>

    );
}

export default PictureUploader;
