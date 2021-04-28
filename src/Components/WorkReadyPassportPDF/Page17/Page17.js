import Button from "@material-ui/core/Button";
import * as React from 'react';
import { Grid } from '@material-ui/core';
import './index.css';
import TextField from '@material-ui/core/TextField';
import SignatureCanvas from 'react-signature-canvas';
import CornerLogo from '../../../images/Corner-logo.png';
import html2pdf from 'html2pdf.js';
import UserDetails from './UserDetails';
import jsPDF from 'jspdf';
import { FormatListBulletedRounded } from "@material-ui/icons";
import { html2canvas, onePageCanvas } from 'html2canvas';


const Page17 = ( props ) => {

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }



    const downloadPDF = () => {

        var opt = {
            margin:       1,
            image:        { type: 'png', quality: 0.75 },
            html2canvas:  { scale: 2, y: 0,  scrollY: 0 },
            jsPDF:        { unit: 'in', orientation: 'portrait',  }
          };

        var pages = [document.getElementById('fields-container')];
        var worker = html2pdf().set(opt).from(pages[0]).toPdf();
        pages.slice(1).forEach(function (page) {
            worker = worker.get('pdf').then(function (pdf) {
                pdf.addPage();
            }).from(page).toContainer().toCanvas().toPdf();
        });
        worker = worker.save(props.userInformation.fullName + '-WRKP.pdf');
    }

    return (
    <body>
    <Grid container spacing={2} id='fields-container'>
    <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
       <br/>
    </Grid>
        <Grid item xs={12}>
            <br/>
<h2> A Review of your Passport { /* get full name prop from WorkReadyPassportHandler */}</h2>
<br/><br/>
<h4 id = 'user-details'>Full Name:</h4>
<p>{props.userInformation.fullName}</p>
    <h4>Phone Number:</h4>
    <p>{props.userInformation.phoneNumber}</p>
    <h4>Email:</h4>
    <p class="html2pdf__page-break">{props.userInformation.email}</p>
    <h4 id = 'employment-goals'>#1 - Employment Goals:</h4>
    <p class="html2pdf__page-break"> {props.userInformation.employmentGoals}</p>
    <h4>#2 - Personal Wellness:</h4>
    <p class="html2pdf__page-break">{props.userInformation.personalWellness}</p>
        <h4>#3 - Life Skills:</h4>
        <p class="html2pdf__page-break">{props.userInformation.lifeSkills}</p>
        <h4>#4 - Communication:</h4>
        <p class="html2pdf__page-break">{props.userInformation.communication}</p>
        <h4>#5 - Academic Achievements:</h4>
        <p class="html2pdf__page-break">{props.userInformation.academicAchievements}</p>
        <h4>#6 - Money Management:</h4>
        <p class="html2pdf__page-break"> {props.userInformation.moneyManagement}</p>
        <h4>#7 - Drug Free:</h4>
        <p class="html2pdf__page-break"> {props.userInformation.drugFree}</p>
        <h4>#8 - Work Experience:</h4>
        <p class="html2pdf__page-break"> {props.userInformation.workExperience}</p>
        <h4>#9 - Team Work:</h4>
        <p class="html2pdf__page-break"> {props.userInformation.teamWork}</p>
        <h4>#10 - Health and Safety:</h4>
        <p class="html2pdf__page-break"> {props.userInformation.healthAndSafety}</p>
        <h4>#11 - Drivers License:</h4>
        <p class="html2pdf__page-break">  {props.userInformation.driversLicense}</p>
        <h4>#12 - CV:</h4>
        <p class="html2pdf__page-break">{props.userInformation.cv}</p>
        <h4>#13 - Character References:</h4>
        <p class="html2pdf__page-break"> {props.userInformation.characterReferences}</p>
        <h4>Interview Registration Form:</h4>
        <p class="html2pdf__page-break"> {props.userInformation.interviewRegistrationForm}</p>
    </Grid>
    </Grid>
    <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goBackward}>Save and Return to your Profile</Button>
    <Button className= "Button" onClick={downloadPDF}>Download PDF Version</Button>
    </body>
)

}


 export default Page17;