import React, { useState } from 'react';
import {Grid, IconButton} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './styling.css';
import { propTypes } from 'react-bootstrap/esm/Image';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const PictureUploader = (props) => {
    const [{alt, src}, setImg] = useState({
        src: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        alt: ''
    });
    const [uploadHelper, setUploadHelper] = useState('Upload a portrait photo of yourself.')
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);

    const handleImg = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            
            reader.onloadend = () => {
                setImgPreview(reader.result);
                props.setUploadedImage(reader.result);
            };
            var url = reader.readAsDataURL(selected);
            console.log(url);

        } else {
            setError(true);
        }
    };

    return (
        <div className="picture-container">
                <div className = "img-container">
                <img src={props.userInformation.profilePicture} alt={alt} className="form-img" name='profilePicture'/>
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
                <h5>{uploadHelper}</h5>
                <label for="img">
                <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera/>
        </IconButton>
        </label>
        </div>

    );
}

export default PictureUploader;
