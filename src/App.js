import ProfilePicture from './Components/Profile_Picture/PictureUploader';
import './App.css';
import LoginPage from './Components/Login/login';
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
  );
}

export default App;
