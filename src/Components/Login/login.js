import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import './styling.css'

const LoginPage = () => {
    return (
        <div className='login-wrapper'>
                <input type="text" className="student-username"/>
                <input type="password" className="student-password"/>
                <button className="login-submit-button">Log Me In</button>
                <button className="Register-submit-button">Register</button>
        </div>
    );
}
export default LoginPage;