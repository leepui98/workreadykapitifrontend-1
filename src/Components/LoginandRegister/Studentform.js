import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css"

export default class Studentform extends React.Component {

    render() {

        return (
            <div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-5 mb-1">
                            <label htmlFor="date_of_birth">Date of Birth :</label>
                        </div>
                        <div className="col-lg-7 mb-1">
                            <input type="date" id="date_of_birth" name="date_of_birth"
                                placeholder="YYYY-mm-dd*"
                                min='1899-01-01' className="form-control py-3 px-3" required="required"
                                data-validation-required-message="Please enter project end date."
                                onChange={event => {
                                    this.setState({ project_end_date: event.target.value })
                                }} />

                            <span id="project_end_date_msg"> </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-1">
                            <label htmlFor="school_name">School Associated with:</label>
                        </div>
                        <div className="col-lg-7 mb-1">
                            <input id="school_name" placeholder=" Please enter your first name" onChange={event => {
                                this.setState({ school_name: event.target.value })
                            }} type="text" className="school_name" required />
                            <span id="school_name_msg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-1">
                            <label htmlFor="Phone_Number">Phone Number:</label>
                        </div>
                        <div className="col-lg-7 mb-1">
                            <input id="phone_number" placeholder=" Please enter your contact number" onChange={event => {
                                this.setState({ school_name: event.target.value })
                            }} type="number" className="phone_number" required />
                            <span id="phone_msg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-1">
                            <label htmlFor="school_name">School email Address:</label>
                        </div>
                        <div className="col-lg-7 mb-1">
                            <input id="school_name" placeholder=" Please enter your school Email Address" onChange={event => {
                                this.setState({ school_name: event.target.value })
                            }} type="text" className="school_name" required />
                            <span id="school_name_msg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-1">
                            <label htmlFor="school_name">Personal email Address:</label>
                        </div>
                        <div className="col-lg-7 mb-1">
                            <input id="school_name" placeholder=" Please enter your personal email address" onChange={event => {
                                this.setState({ school_name: event.target.value })
                            }} type="text" className="school_name" required />
                            <span id="school_name_msg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-1">
                            <label>Industry:</label>
                        </div>
                        <div className="col-lg-4  ind_select_inputs">
                            <div id="ind_input">
                                <input type="radio" value="ind1" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_retail" /> Retail
                       </div>
                            <div id="ind_input">
                                <input type="radio" value="ind2" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_construction" /> construction
                             </div>
                         <div id="ind_input">
                                <input type="radio" value="ind3" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_logistics" /> logistics
                            </div>
                            <div id="ind_input">
                                <input type="radio" value="ind4" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_hospitality" /> hospitality
                            </div>
                            </div>
                            <span id="Project_industry_msg" />
                        
                    </div>
                </div >
            </div >
            
        )
    }
}