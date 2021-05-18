import Button from "@material-ui/core/Button";
import * as React from 'react';
import { Grid } from '@material-ui/core';
import CornerLogo from '../../../images/Corner-logo.png';
import html2pdf from 'html2pdf.js';
import UserDetails from "./UserDetails";
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";



const Page17 = ( props ) => {

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

    const downloadPDF = () => { 

        var opt = {
            margin:       1,
            image:        { type: 'png', quality: 0.98 },
            html2canvas:  { scale: 2, y: 0,  scrollY: 0 },
            jsPDF:        { unit: 'in', orientation: 'portrait',  }
          };

          //pages is the HTML elements from 'fields-container' div put into an array, which we can iterate over with a forEach loop.
        var pages = [document.getElementById('fields-container')];
        var worker = html2pdf().set(opt).from(pages[0]).toPdf();
        // Loop over each page 
        pages.slice(1).forEach(function (page) {
            worker = worker.get('pdf').then(function (pdf) {
                pdf.addPage();
            }).from(page).toContainer().toCanvas().toPdf();
        });
        worker = worker.save(props.userInformation.fullName + '-WRKP.pdf');
    }

    return (
        <div>
    <div id='fields-container'>
    <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
    </Grid>
        <Grid item xs={12}>
<h2> <br/> A Review of your Passport</h2>
<br/><br/>
<UserDetails
userInformation={props.userInformation}
handleChange={props.handleChange}
/>
    </Grid>
    </div>
    <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button id='nav-buttons' component={Link} to="/profile">Save and Return to Your Profile</Button>
    <Button className= "Button" onClick={downloadPDF}>Download PDF Version</Button>
    
    </div>
)

}


 export default Page17;