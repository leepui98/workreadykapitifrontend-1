import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CornerLogo from '../../images/Corner-logo.png';

const Page6 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <div>
        <Grid item xs={12}>
       <img src={CornerLogo} width='200px' height='200px'/>
       <br/>
    </Grid>
            <Grid item xs={12}>
    <h2>         <br/>Step 5 - Managing your Money { /* get full name prop from WorkReadyPassportHandler */}</h2>
        <p>
        Consider how you will answer questions about managing your pay-packet
for the first 90 days, managing rent, power, food, transport, phone, internet,
try using sorted.co.nz.
How does the government and employers contribute to your KiwiSaver?
        </p>
        <br/>
        <h3 className='personal-wellness-title'>Do you know how
KiwiSaver can
contribute to buying
your first home?</h3>
        <div className="textfield-container">
        <TextField
        onChange={props.handleChange} name={'moneyManagement'} defaultValue={props.userInformation.moneyManagement}
        multiline 
rows={12}
variant="outlined"
fullWidth
>
        </TextField>
        </div>
        <br/>
        </Grid>
        <Grid item xs={12} className='handy-hints'>
<h6 className='handy-hints-heading'>Handy Hints
</h6>
<p className='handy-hints-desc'>
KiwiSaver is a voluntary, work-based savings initiative to help you with your long-term saving for
retirement. Log on to kiwisaver.govt.nz and find out more.
Create a budget that keeps pace with your lifestyle using sorted.co.nz
</p>

        </Grid>
        <br/>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page6;