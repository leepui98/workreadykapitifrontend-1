import React from 'react';
import Studentform from "./Studentform"
import Employerform from "./Employerform"
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css"
import {Query, Mutation} from 'react-apollo'
import axios from '../../Axios'
import { LOGIN_USER } from '../../GraphQL/Mutation';

const ref = React.createRef();

export default class Registerform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            reg_status: "",
            first_name: "",
            last_name: "",
            user_name: "",
            pass: "",
            re_pass: "",
            school_name: "",
            date_of_birth: "",
            phone_number: "",
            school_email: "",
            p_email: "",
            retail: false,
            construction: false,
            hospitality: false,
            logistics: false,
        };
    }
    setTransferedDataFtn = (studentFormData) => {
        this.setState({ school_name: studentFormData.school_name })
        this.setState({ retail: studentFormData.ch_retail })
        this.setState({ date_of_birth: studentFormData.date_of_birth })
        this.setState({ phone_number: studentFormData.phone_number })
        this.setState({ school_email: studentFormData.school_email })
        this.setState({ p_email: studentFormData.p_email })
        this.setState({ construction: studentFormData.ch_construction })
        this.setState({ hospitality: studentFormData.ch_hospitality })
        this.setState({ logistics: studentFormData.ch_logistics })

  
    }
    registerftn = () => {
        if (this.state.reg_status === "student") { this.register_student(this.state.user_name,this.state.pass) } else
            if (this.state.reg_status === "Employer") { this.register_employer() }
    }

    register_student = ( user_name, pass) => {

        console.log("hello");
        console.log(this.state.retail);
        const requestBody = {
            query: `
            mutation{
                loginUser(userName: "${user_name}", password: "${pass}"){
                    successful,
                        message,
                       uid,
                        token,
                        studentStatus,
                        employerStatus,
                  }
                }
              `
          };
          fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
             }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
       console.log(resData);
      })
      .catch(err => {
        console.log(err);
       
      });
  };
    
    register_employer = () => {
    }
    render() {
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
                                        <input id="first_name" placeholder=" Please enter your first name" onChange={event => {
                                            this.setState({ first_name: event.target.value })
                                        }} type="text" className="first_name" required />
                                        <span id="first_name_msg" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 mb-1">
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                    <div className="col-lg-7 mb-1">
                                        <input id="last_name" placeholder=" Please enter your last name" onChange={event => {
                                            this.setState({ last_name: event.target.value })
                                        }} type="text" className="last_name" required />
                                        <span id="last_name_msg" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 mb-1">
                                        <label htmlFor="user_name">User Name</label>
                                    </div>
                                    <div className="col-lg-7 mb-1">
                                        <input id="user_name" placeholder=" Please enter a user name" onChange={event => {
                                            this.setState({ user_name: event.target.value })
                                        }} type="text" className="user_name" required />
                                        <span id="user_name_msg" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 mb-1">
                                        <label htmlFor="p_word1">password</label>
                                    </div>
                                    <div className="col-lg-7 mb-1">
                                        <input id="p_word1" placeholder=" Please enter a Password" onChange={event => {
                                            this.setState({ pass: event.target.value })
                                        }} type="password" className="p_word1" required />
                                        <span id="p_word1_msg" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 mb-1">
                                        <label htmlFor="p_word2">Retype password</label>
                                    </div>
                                    <div className="col-lg-7 mb-1">
                                        <input id="p_word2" placeholder=" Please Re-enter the same Password" onChange={event => {
                                            this.setState({ p_word1: event.target.value })
                                        }} type="password" className="p_word2" required />
                                        <span id="p_word2_msg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="img_background"></div>
                    </div>
                    <div id="reg_status_maindiv">
                        <div id="reg_status_div">
                            <input type="radio" value="student" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="reg-status" /> Youth/Student
                            <input type="radio" value="Employer" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="reg-status" /> Employer
                        </div>
                    </div>
                    {this.state.reg_status === "student" ? <Studentform dataTransferFtn={this.setTransferedDataFtn} /> : <div></div>}
                    {this.state.reg_status === "Employer" ? <Employerform /> : <div></div>}
                    {this.state.reg_status ? <button onClick={() => this.registerftn()}>Submit</button> : <div></div>}
                </div>
            </div>
        )
    }
}