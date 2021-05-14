
import './App.css';
import LoginPage from './Components/Login/login';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from "./Components/LoginandRegister/Login";
import Registerform from "./Components/LoginandRegister/RegisterForm";
import ForgetPass from "./Components/LoginandRegister/ForgetPass";
import Home from "./Components/LoginandRegister/Home";
import ProfilePage from "./Components/Profile/ProfilePage";
import WorkReadyPassportHandler from "./Components/WorkReadyPassportPDF/WorkReadyPassportHandler";

function App() {
  return (
    <Router>
    <div>
           {/* <MainNavigation /> */}
             <main>
                 <Switch>
                 <Route path="/login" component={Login}/>
                 <Route path="/home" component={Home}/>
                 <Route path="/register" component={Registerform}/>
                 <Route path="/forgpass" component={ForgetPass}/>
                 <Route path="/LoginPage" component={LoginPage}/>
                 <Route path="/profile" component={ProfilePage} />
                 <Route path="/kapitiworkreadypassport" component={WorkReadyPassportHandler} />
                 <Redirect to="/home"/> 
                 </Switch>
             </main>
     </div>
     </Router>



  );
}

export default App;
