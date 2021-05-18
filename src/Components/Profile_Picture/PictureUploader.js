import React, { useState } from 'react';
import {Grid, IconButton} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './styling.css';
import { propTypes } from 'react-bootstrap/esm/Image';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const PictureUploader = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
  
    const handleImageChange = (e) => {
      setError(false);
      const selected = e.target.files[0];
      const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && ALLOWED_TYPES.includes(selected.type)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          setImgPreview(reader.result);
        };
        reader.readAsDataURL(selected);
      } else {
        setError(true);
      }
    };

    return (
        <div className="picture-container">
                <div className = "img-container">
                <img src={imgPreview} className="form-img" name='profilePicture'/>
                </div>
                <input className="form-img"
                    type="file"
                    id="img" 
                    accept=".png, .jpg, .jpeg" 
                    className="visually-hidden"
                    onChange={handleImageChange}
                    alignItems="center"
                    component="span" display="flex"
                />
                <br></br>
                <label for="img">
                <IconButton id='icon-button' color="primary" aria-label="upload picture" component="span">
          <PhotoCamera/>
        </IconButton>
        </label>
        </div>

    );
}

export default PictureUploader;
