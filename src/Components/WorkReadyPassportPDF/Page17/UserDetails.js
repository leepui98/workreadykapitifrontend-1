const UserDetails = (props) => {

return (
    <div>
<h4>Full Name:</h4>
<p>{props.userInformation.fullName}</p>
    <h4>Phone Number:</h4>
    <p>{props.userInformation.phoneNumber}</p>
    <h4>Email:</h4>
    <p>{props.userInformation.email}</p>
    <h4>Employment Goals:</h4>
    <p> {props.userInformation.employmentGoals}</p>
    <h4>Personal Wellness:</h4>
    <p>{props.userInformation.personalWellness}</p>
        <h4>Life Skills:</h4>
        <p>{props.userInformation.lifeSkills}</p>
        <h4>Communication:</h4>
        <p>{props.userInformation.communication}</p>
        <h4>Academic Achievements:</h4>
        <p>{props.userInformation.academicAchievements}</p>
        <h4>Money Management:</h4>
        <p> {props.userInformation.moneyManagement}</p>
        <h4>Drug Free:</h4>
        <p> {props.userInformation.drugFree}</p>
        <h4>Work Experience:</h4>
        <p> {props.userInformation.workExperience}</p>
        <h4>Team Work:</h4>
        <p> {props.userInformation.teamWork}</p>
        <h4>Health and Safety:</h4>
        <p> {props.userInformation.healthAndSafety}</p>
        <h4>Drivers License:</h4>
        <p>  {props.userInformation.driversLicense}</p>
        <h4>CV:</h4>
        <p>{props.userInformation.cv}</p>
        <h4>Character References:</h4>
        <p> {props.userInformation.characterReferences}</p>
        <h4>Interview Registration Form:</h4>
        <p> {props.userInformation.interviewRegistrationForm}</p>
   </div>
)
    } 
    
export default UserDetails;