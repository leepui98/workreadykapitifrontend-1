import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const WorkReadyPassportView = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(18),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));

      const classes = useStyles();

    return (
        <body>
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Work Ready Passport:</Typography>
        </AccordionSummary>
        <AccordionDetails contentEditable='true'>
          <Typography>
          <div>
<h4>Full Name:</h4>
<p>Max Spijkerbosch</p>
    <h4>Employment Goals:</h4>
    <p></p>
    <h4>Personal Wellness:</h4>
    <p></p>
        <h4>Life Skills:</h4>
        <p></p>
        <h4>Communication:</h4>
        <p></p>
        <h4>Academic Achievements:</h4>
        <p></p>
        <h4>Money Management:</h4>
        <p></p>
        <h4>Drug Free:</h4>
        <p></p>
        <h4>Work Experience:</h4>
        <p></p>
        <h4>Team Work:</h4>
        <p></p>
        <h4>Health and Safety:</h4>
        <p></p>
        <h4>Drivers License:</h4>
        <p></p>
        <h4>CV:</h4>
        <p></p>
        <h4>Character References:</h4>
        <p></p>
        <h4>Interview Registration Form:</h4>
        <p></p>
        <br/>
   </div>
   </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>About Me</Typography>
        </AccordionSummary>
        <AccordionDetails contentEditable='true'>
          <Typography>
            I am cool. that is all.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Interests</Typography>
        </AccordionSummary>
        <AccordionDetails contentEditable='true'>
          <Typography>
            Baking, Woodwork
          </Typography>
        </AccordionDetails>
      </Accordion>
        </body>
    );
}
export default WorkReadyPassportView;