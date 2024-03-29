import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";
import Checkbox from '../Disclaimerview/checkbox';

export default class Studentform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            retail: false, construction: false, logistics: false, hospitality: false
        };

    }
    sendData = () => {
        this.props.dataTransferFtn({
            school_name: document.getElementById("school_name").value,
            date_of_birth: document.getElementById("date_of_birth").value,
            phone_number: document.getElementById("phone_number").value,
            school_email: document.getElementById("school_email").value,
            p_email: document.getElementById("p_email").value,
            ch_retail: this.state.retail,
            ch_construction: this.state.construction,
            ch_hospitality: this.state.hospitality,
            ch_logistics: this.state.logistics,
        });
    }
    render() {

        return (
            <div>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="date_of_birth">Date of Birth :</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input type="date" id="date_of_birth" name="date_of_birth"
                                    placeholder="YYYY-mm-dd*"
                                    min='1899-01-01' className="form-control py-3 px-3" required="required"
                                    data-validation-required-message="Please enter your date of birth."
                                    onChange={event => {
                                        this.sendData()
                                    }} />

                                <span id="date_of_birth_msg"> </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="school_name">School Associated with:</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="school_name" placeholder=" Please enter the school you are associated with" onChange={event => { this.sendData() }} type="text" className="school_name" required />
                                <span id="school_name_msg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="Phone_Number">Phone Number:</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="phone_number" placeholder=" Please enter your contact number" onChange={event => {
                                    this.sendData()
                                }} type="number" required />
                                <span id="phone_msg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="school_email">School email Address:</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="school_email" placeholder=" Please enter your school Email Address" onChange={event => {
                                    this.sendData()
                                }} type="text" required />
                                <span id="school_email_msg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mb-1">
                                <label htmlFor="school_name">Personal email Address:</label>
                            </div>
                            <div className="col-lg-7 mb-1">
                                <input id="p_email" placeholder=" Please enter your personal email address" onChange={event => {
                                    this.sendData()
                                }} type="text" required />
                                <span id="p_email_msg" />
                            </div>
                        </div>
                        <div className="row1">

                            <div id="inddiv">
                                <div className="col-lg-5 mb-1">
                                    <label>Industry:</label>

                                    <span id="Project_industry_msg" />
                                </div>

                                <div className="col-7 flex-nowrap" id="ind_select_inputs">
                                    <div class="p-2 border" id="ind_check">
                                        <input type="checkbox" onChange={(event => { this.setState({ retail: !this.state.retail }, () => { this.sendData() }) })} name="ind_retail" />Retail

                                    </div><div class="p-2 border">
                                        <label id="ind_check"> <input id="ch-construction" type="checkbox" value="ind2" onChange={(event => { this.setState({ construction: !this.state.construction }, () => { this.sendData() }) })} name="ind_construction" /> construction
                                        </label></div><div class="p-2 border">

                                        <label id="ind_check"> <input id="ch-logistics" type="checkbox" value="ind3" onChange={(event => { this.setState({ logistics: !this.state.logistics }, () => { this.sendData() }) })} name="ind_logistics" /> logistics
                                        </label></div><div class="p-2 border">
                                        <label id="ind_check"> <input id="ch-hospitality" type="checkbox" value="ind4" onChange={(event => { this.setState({ hospitality: !this.state.hospitality }, () => { this.sendData() }) })} name="ind_hospitality" /> hospitality
                                        </label></div>

                                </div>
                            </div>
                            <span id="Project_industry_msg" />
                        </div>
                        <div className="row">
                            <div className="col-lg-7 mb-1">
                                <Checkbox />
                                <span id="disclaimer_msg" />
                            </div>
                        </div>
                    </div></form>
            </div>
        )
    }
}