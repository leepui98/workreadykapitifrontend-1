import React from 'react';
import Studentform from "./Studentform"
import Employerform from "./Employerform"
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css"
const ref = React.createRef();


export default class Registerform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reg_status: ""
        };

    }
    render() {
        return (

            <div id="main-div-register">
                <h1>Register a new user</h1>
                <div>
              

                    <div id="sub-div1-register">
                        <div id=" div_fields" style={{width: 600+'px'}}>

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
                                            this.setState({ p_word1: event.target.value })
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
                    {this.state.reg_status === "student" ? <Studentform /> : <div></div>}
                    {this.state.reg_status === "Employer" ? <Employerform /> : <div></div>}
                    {this.state.reg_status ? <button>Submit</button> : <div></div>}
                </div>

            </div>
        )
    }
}