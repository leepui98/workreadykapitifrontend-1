import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePicture from '../Profile_Picture/PictureUploader';
import WorkReadyPassportHandler from '../WorkReadyPassportPDF/WorkReadyPassportHandler';
import AdminPage from '../Admin_Page/admin-page';
import TopLogo from '../../images/Corner-logo.png';
import LoginPage from './Login';

export default Home;
function Home() {

        return (
            <div className='test-page-container'>

                        {/* <WorkReadyPassportHandler/> */}
                        <LoginPage/>


                    </div>


        )
    }