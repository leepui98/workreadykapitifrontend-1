import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePicture from '../Profile_Picture/PictureUploader';
import LoginPage from '../Login/login';
import WorkReadyPassportHandler from '../WorkReadyPassportPDF/WorkReadyPassportHandler';
import './index.css';

export default Home;
function Home() {

        return (
            <div className='test-page-container'>
                    <WorkReadyPassportHandler/>
            </div>
        )
    }