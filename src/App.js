import ProfilePicture from './Components/Profile_Picture/PictureUploader';
import './App.css';
import LoginPage from './Components/Login/login';
<<<<<<< HEAD
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
=======
import CVUploader from './Components/CV_Uploader/CVUploader';
import QRReader from './Components/QR_Code_Reader/QRReader';

function App() {
  return (
    <div className="App">
 <div className="header">
 </div>
<div className="middle">
<CVUploader/>
</div>
<div className="profile">
  <ProfilePicture/>
</div>
<div className="qr-code-reader">
  <QRReader/>
</div>
    </div>
>>>>>>> d19497b8e600df8e66a61c7d63d8ae57008fbef8
  );
}

export default App;
