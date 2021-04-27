import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Login.css';
import { LOGIN_USER } from '../../GraphQL/Mutation';
import { useMutation } from "@apollo/client"



export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

function Login({ setToken, serverURI }) {

    const history = useHistory();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [regBtn, setRegBtn] = React.useState(false);


    const [loginUser, { error }] = useMutation(LOGIN_USER, {
        onCompleted: (login) => {
            console.log(login.loginUser.message)
            localStorage.setItem('login-token', 'success');
  
            window.location.reload();
        }
    });

    // const loginftn = e => {
    //     e.preventDefault();
    //     axios.post(`login`, { username: { username }, password: { password } }).then((res) => {
    //         console.log(res);
    //         console.log(serverURI);
    //         res.data['login'] === 'success_admin' ? setToken('res.data') : alert('Invalid Username or password !!');
    //         if (res.data['login'] === 'success') {
    //             setToken('res.data');

    //             localStorage.setItem('login-token', 'success');
    //             localStorage.setItem('login-user', username);
    //             localStorage.setItem('login-mgr', "false");
    //             window.location.reload();
    //         }
    //     })
    // }


    //     localStorage.setItem('login-token','success');
    //     localStorage.setItem('login-user',username);
    //     localStorage.setItem('login-mgr',"false");
    //     window.location.reload();
    // 
    //   if(res.data['login'] === 'successmgr') {
    //            setToken('res.data');
    //            localStorage.setItem('login-token','success');
    //            localStorage.setItem('login-user',username);
    //       localStorage.setItem('login-mgr',"true");
    //            window.location.reload();
    //        }
    //         });
    // }

     const register=()=>{ history.push('/register')}

    return (<div>{!regBtn &&(
        <div className="main-div-login-KWR">
            <div id="logform1"></div>
            <div id="logform1"></div>

            <div id="logform">
                <h1 id="title">Welcome to Work Ready Kapiti </h1>
                <div className="login-div-KWR">

                    <div className="login-heading-div">
                        <h5 id="login-heading-KWR">Login to view Profile</h5>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="name">User Name:</label>
                            <input placeholder="Please enter user name " onChange={event => { setUsername(event.target.value) }} type="text" className="form-control input" id="name" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input placeholder="Please enter password " onChange={event => { setPassword(event.target.value) }} type="password" className="form-control input" id="password" />
                        </div>
                    </div>

                    <div className="col-lg-12 text-center">
                      
                            <button onClick={() => { loginUser({ variables: { userName: username, password: password } }) }} className="btn btn-primary" id="login-btn" type="submit"> LOGIN</button>

                      
                    </div>
                    <div >
                        <NavLink to="/forgpass" exact>Forget Username/Password</NavLink>
                    </div>
                    <div className="col-lg-12 text-center" id="btn-reg">
                    <NavLink to="/register" exact>REGISTER NEW USER</NavLink>
                        {/* <button  onclick ={event => { setRegBtn("true") }} className="btn btn-primary " id="reg-btn" > REGISTER</button> */}
                    </div>
                </div>

            </div>

        </div>)}
        </div>
    )
}