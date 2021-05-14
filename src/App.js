
import './App.css';
import React from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from "./Components/LoginandRegister/Login";
import Registerform from "./Components/LoginandRegister/RegisterForm";
import ForgetPass from "./Components/LoginandRegister/ForgetPass";
import Home from "./Components/LoginandRegister/Home";
import ProfilePage from "./Components/Profile/ProfilePage";
import WorkReadyPassportHandler from "./Components/WorkReadyPassportPDF/WorkReadyPassportHandler";
import Logout from './Components/LoginandRegister/Logout';

export default function App() {
  const [token, setToken] = React.useState('');
  let token1 = localStorage.getItem('login-token');
  if (!token1) {
    return (
    <Router>
      <div>
       <main>
            <Switch>
            <Route path="/login" component={Login} />
       <Route path="/register" component={Registerform} />
       <Route path="/forgpass" component={ForgetPass} />
       <Redirect to="/login" />

       </Switch>
       </main>
       </div></Router>)
  }
  if (token1) {
    return (
      <Router>
        <div>
          {/* <MainNavigation /> */}
          <main>
            <Switch>
           
              <Route path="/home" component={Home} />
              <Route path="/register" component={Registerform} />
              <Route path="/forgpass" component={ForgetPass} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/logout" component={Logout} />
              <Route path="/kapitiworkreadypassport" component={WorkReadyPassportHandler} />
              <Redirect to="/profile" />
            </Switch>
          </main>
        </div>
      </Router>



    );
  }
}


