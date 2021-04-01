import ProfilePicture from './Components/Profile_Picture/PictureUploader';
import './App.css';
import LoginPage from './Components/Login/login';

function App() {
  return (
    <div className="App">
 <div className="header">
Component Black box testing
 </div>
<div className="middle">
<LoginPage/>
</div>
<div className="profile">
  <ProfilePicture/>
</div>
    </div>
  );
}

export default App;
