import ProfilePicture from './Components/Profile_Picture/PictureUploader';
import './App.css';
import LoginPage from './Components/Login/login';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from "./Components/LoginandRegister/Login";
import Registerform from "./Components/LoginandRegister/RegisterForm";
import ForgetPass from "./Components/LoginandRegister/ForgetPass";
import Home from "./Components/LoginandRegister/Home";

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
                 <Redirect to="/home"/> 
                 </Switch>
             </main>
     </div>
     </Router>


//   <>  <div className="App">
//  <div className="header">
//  </div>
// <div className="middle">
// <LoginPage/>
// </div>
// <div className="profile">
//   <ProfilePicture/>
// </div>
//     </div> </>
  );
}

export default App;
