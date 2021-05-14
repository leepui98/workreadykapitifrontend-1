import React, { useState } from "react";
import "./_infoblock.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from '@material-ui/core/TextField';
import { LaptopWindows } from "@material-ui/icons";

//the info block design will need to be modified soon, might not be a good way to use this textfield 
const InfoBlock = () => {

  //Different types of profile information we want to edit
const [aboutMeSection, setAboutMeSection] = useState(''); //about me information to save into local storage
const [interests, setInterests] = useState(''); //interests information to save into local storage

return (
<div className='profile-flex-container'>
<div className='about-me-profile-section'>

  <h2> About Me </h2>
<TextField
rowsMax={3}
label="This should be 2-3 sentences. Put your interests here."
fullWidth
multiline 
rows={4}
variant="filled"
contentEditable="false"/>

<h2> Interests </h2>
<TextField
rowsMax={3} label="This should be bullet points of industries that interest you." fullWidth multiline rows={4} variant="filled" inputProps='Yup' contentEditable="false"
/>

<h2> Contact Me </h2>
<TextField
rowsMax={3} label="This should be an email that employers can use to send a message to you." fullWidth multiline rows={4} variant="filled" inputProps='Yup' contentEditable="false"
/>

</div>
</div>
);
 }

export default InfoBlock;
