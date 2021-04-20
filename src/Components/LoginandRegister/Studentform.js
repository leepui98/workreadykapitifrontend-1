import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";
import Checkbox from '../Disclaimerview/checkbox';

export default class Studentform extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            date_of_birth: "", school_name:"my school", ph_number: "", school_email : "", email: "", industry: [],
        };

    }

=======
    
>>>>>>> f06cba59b362202899f57c9808a37d856ce3758e
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
<<<<<<< HEAD
                        <div className="col-lg-5 mb-1">
                            <label>Industry:</label>
=======
                        <div className="col-lg-5 mb-4 form-floating">
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Industry:</label>
                                    <select id="Project_industry" name="industry" className="form-control" required
                                            onChange={event => {
                                                this.setState({project_industry: event.target.value})
                                            }}>
                                        <option disabled selected value="-1">-- Select Industry-</option>
                                        <option value="banking">Banking</option>
                                        <option value="healthcare"> Heath Care</option>
                                        <option value="education"> Education</option>
                                        <option value="telecom">Telecommunication</option>
                                        <option value="retail">Retail</option>
                                    </select>
                                <span id="Project_industry_msg"/>
                            </div>
>>>>>>> f06cba59b362202899f57c9808a37d856ce3758e
                        </div>
                        <div id="ind_select_inputs">
                           
                            <label id = "ind_check"><input  type="checkbox" value="ind1" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_retail" /> Retail
                            </label> 
                            
                               <label id = "ind_check"> <input   type="checkbox" value="ind2" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_construction" /> constr
                               </label> 
                        
                               <label id = "ind_check"> <input type="checkbox" value="ind3" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_logistics" /> logistics
                         </label> 
                         <label id = "ind_check"> <input type="checkbox" value="ind4" onChange={event => { this.setState({ reg_status: event.target.value }) }} name="ind_hospitality" /> hospitality
                            </label>
                            </div>
                            <span id="Project_industry_msg" />
                        
                    </div>
<<<<<<< HEAD
                </div >
            </div >
            
=======

                    </div>
                                <div className="row">
                        <div className="col-lg-7 mb-1">
                            <Checkbox />
                            <span id="disclaimer_msg" />
                        </div>
                    </div>
                </div>
            </div>
>>>>>>> f06cba59b362202899f57c9808a37d856ce3758e
        )
    }
}