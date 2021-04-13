import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page5 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
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
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Life Skills">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page5;