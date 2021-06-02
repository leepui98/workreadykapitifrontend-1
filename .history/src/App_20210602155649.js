
import './App.css';
import React from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from "./Components/LoginandRegister/Login";
import Registerform from "./Components/LoginandRegister/RegisterForm";
import ForgetPass from "./Components/LoginandRegister/ForgetPass";
import Home from "./Components/LoginandRegister/Home";
import ProfilePage from "./Components/Profile/ProfilePage";
import WorkReadyPassportHandler from "./Components/WorkReadyPassportPDF/WorkReadyPassportHandler";
import JobListing from "./Components/JobListing/jobListingScreenControl";
import ProfileEmployer from "./Components/Profile/ProfileEmployer";
import EmployerAddJob from "./Components/EmployerJobSubmission/employerAddJobScreenControl"
import MessageApply from './Components/JobListing/applyMessage'
import Logout from './Components/LoginandRegister/Logout';
// export default App;

// function App() {
//   const [token, setToken] = React.useState('');
//   let token1 = localStorage.getItem('login-token');
//   if (!token1) {
//     return (
//     <Router>
//       <div>
//        <main>
//             <Switch>
//             <Route path="/login" component={Login} />
//        <Route path="/register" component={Registerform} />
//        <Route path="/forgpass" component={ForgetPass} />
//        <Redirect to="/login" />

//        </Switch>
//        </main>
//        </div></Router>)
//   }
//   if (token1) {
//     return (
//       <Router>
//         <div>
//           {/* <MainNavigation /> */}
//           <main>
//             <Switch>
           
//               <Route path="/home" component={Home} />
//               <Route path="/register" component={Registerform} />
//               <Route path="/forgpass" component={ForgetPass} />
//               <Route path="/profile" component={ProfilePage} />
//               <Route path="/logout" component={Logout} />
//               <Route path="/kapitiworkreadypassport" component={WorkReadyPassportHandler} />
//                  <Route path="/joblisting" component={JobListing} />
//                  <Route path="/employerprofile" component={ProfileEmployer} />
//                  <Route path="/addJobEmployer" component={EmployerAddJob} />
//                  <Route path="/messageApply" component={MessageApply} />
//               <Redirect to="/profile" />
//             </Switch>
//           </main>
//         </div>
//       </Router>



//     );
//   }
// }

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
                 {/* <Route path="/LoginPage" component={LoginPage}/> */}
                 <Route path="/profile" component={ProfilePage} />
                 <Route path="/kapitiworkreadypassport" component={WorkReadyPassportHandler} />
                 <Route path="/joblisting" component={JobListing} />
                 <Route path="/employerprofile" component={ProfileEmployer} />
                 <Route path="/addJobEmployer" component={EmployerAddJob} />
                 <Route path="/messageApply" component={MessageApply} />
                 <Redirect to="/home"/> 
                 </Switch>
             </main>
     </div>
     </Router>



  );
}

export default App;


