import Button from "@material-ui/core/Button";
import * as React from 'react';
import { Grid } from '@material-ui/core';
import './page17.css';
import CornerLogo from '../../../images/Corner-logo.png';
import html2pdf from 'html2pdf.js';
import UserDetails from "./UserDetails";



const Page17 = ( props ) => {

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

    const downloadPDF = () => { //Could componentise this. would just need to pass in 'div' as a parameter, and replace 'fields-container' with 
        //'div'. then initialise the div you want to capture on a button click.

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
    <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
    </Grid>
        <Grid item xs={12}>
<h2> <br/> A Review of your Passport { /* get full name prop from WorkReadyPassportHandler */}</h2>
<br/><br/>
<UserDetails
userInformation={props.userInformation}
handleChange={props.handleChange}
/>
    </Grid>
    <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goBackward}>Save and Return to your Profile</Button>
    <Button className= "Button" onClick={downloadPDF}>Download PDF Version</Button>
    </div>
)

}


 export default Page17;