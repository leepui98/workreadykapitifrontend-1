import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';
import CornerLogo from '../../../images/Corner-logo.png';

const Page5 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <body>
    <div>
        <Grid container spacing={2}>
        <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
    </Grid>
            <Grid item xs={12}>
    <h3> Step 2 - Life Skills { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        The ability to cope with stresses and challenges of daily life, using skills such
as communication, literacy, decision-making, occupational requirements,
problem-solving, time management and planning.
List here any physical, social or community activities you have taken part in
which you consider to be key achievements, for example raising money for
charity, outdoor education activities or organisation of youth event. Don’t
forget looking after your family is a very important life skill.

        </p>
        <br/>
        <h3 className='life-skills-title'>What did you enjoy about working on a project?</h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'lifeSkills'} defaultValue={props.userInformation.lifeSkills}
        multiline 
rows={12}
variant="outlined"
fullWidth
>
        </TextField>
        </div>
        </Grid>
        </Grid>
        <br/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
    </body>
)

}
export default Page5;