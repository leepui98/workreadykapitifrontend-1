import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePicture from '../Profile_Picture/PictureUploader';
import LoginPage from '../Login/login';

export default Home;
function Home() {

        return (
            <div>

             <h1>Hi lets create This Home Page</h1>
             <div >
                    <NavLink to="/login" exact>Login</NavLink>
                    </div>

                    <>  <div className="App">
 <div className="header">
 </div>
<div className="middle">
<LoginPage/>
</div>
<div className="profile">
  <ProfilePicture/>
</div>
    </div> </>

            </div>
        )
    }