import React, { useState } from 'react';
import Studentform from "./Studentform"
import Employerform from "./Employerform"
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css"
import { useMutation } from "@apollo/client"
import axios from '../../Axios'
import { LOGIN_USER , CREATE_USER} from '../../GraphQL/Mutation';

//const ref = React.createRef();

 const Registerform = () => {
    const [reg_status, setReg_status] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("hello");
    const [user_name, setUser_name] = useState("");
    const [pass, setPass] = useState("");
    const [re_pass, setRe_pass] = useState("");
    const [school_name, setSchool_name] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [school_email, setSchool_email] = useState("");
    const [p_email, setP_email] = useState("");
    const [retail, setRetail] = useState(false);
    const [construction, setConstruction] = useState(false);
    const [hospitality, setHospitality] = useState(false);
    const [logistics, setLogistics] = useState(false);
    //const [industry, setindustry] = useState('');
    
    

    const [register_student, { error }] = useMutation(CREATE_USER, {
        onCompleted: (res) => {
            console.log(res)
           
            //  window.location.reload();
        }
    });


 function setTransferedDataFtn (studentFormData) {
    setSchool_name(studentFormData.school_name);
    setDate_of_birth(studentFormData.date_of_birth);
    setPhone_number(studentFormData.phone_number);
    setSchool_email(studentFormData.school_email);
    setP_email(studentFormData.p_email);
    setRetail(studentFormData.ch_retail);
    setConstruction(studentFormData.ch_construction);
    setHospitality(studentFormData.ch_hospitality);
    setLogistics(studentFormData.ch_logistics);


}
const  registerftn = () => {

    if (reg_status === "Student") { 
        var industry ="";
        if(retail){industry = industry+"retail "};
        if(construction){industry = industry+"constuction "};
        if(hospitality){industry = industry+"hospitality "};
        if(logistics){industry = industry+"logistics"};
        register_student({ variables: {first_name,last_name, user_name, pass, school_name, date_of_birth, phone_number,school_email,p_email,reg_status,oname:"",industry } }) } else
        if (reg_status === "Employer") { register_employer() }
 }

const register_employer = () => {
}

return (
    <div id="main-div-register">
        <h1>Register a new user</h1>
        <div>
            <div id="sub-div1-register">
                <div id=" div_fields" style={{ width: 600 + 'px' }}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="first_name" placeholder=" Please enter your first name" onChange={event =>
                                    setFirst_name(event.target.value)
                                } type="text" className="first_name" required />
                                <span id="first_name_msg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="last_name" placeholder=" Please enter your last name" onChange={event =>
                                    setLast_name(event.target.value)
                                } type="text" className="last_name" required />
                                <span id="last_name_msg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="user_name">User Name</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="user_name" placeholder=" Please enter a user name"
                                    onChange={event => setUser_name(event.target.value)}
                                    type="text" className="user_name" required />
                                <span id="user_name_msg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="p_word1">password</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="p_word1" placeholder=" Please enter a Password"
                                    onChange={event => setPass(event.target.value) }
                                     type="password" className="p_word1" required />
                                <span id="p_word1_msg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="p_word2">Retype password</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="p_word2" placeholder=" Please Re-enter the same Password"
                                 onChange={event => setRe_pass(event.target.value )}
                                 type="password" className="p_word2" required />
                                <span id="p_word2_msg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="img_background"></div>
            </div>
            <div id="reg_status_maindiv">
                <div id="reg_status_div">
                    <input type="radio" value="Student" onChange={event => setReg_status(event.target.value ) } name="reg-status" /> Youth/Student
                    <input type="radio" value="Employer" onChange={event => setReg_status(event.target.value ) } name="reg-status" /> Employer
                </div>
            </div>
            {reg_status === "Student" ? <Studentform dataTransferFtn={setTransferedDataFtn} /> : <div></div>}
            {reg_status === "Employer" ? <Employerform /> : <div></div>}
            {reg_status ? <button onClick={() => registerftn()}>Submit</button> : <div></div>}
        </div> 
    </div>
);

}
export default Registerform;