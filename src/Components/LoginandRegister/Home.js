import React from 'react';
import { NavLink } from 'react-router-dom';

export default Home;
function Home() {

        return (
            <div>

             <h1>Hi lets create This Home Page</h1>
             <div >
                    <NavLink to="/login" exact>Login</NavLink>
                    </div>
            </div>
        )
    }