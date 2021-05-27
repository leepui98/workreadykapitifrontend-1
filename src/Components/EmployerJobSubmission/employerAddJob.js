import React, { useState } from 'react'
import { Form, Col, Row, Button,row} from "react-bootstrap";
import "./_employerAddJob.scss";
import useShowHide from "./HooksShowHide"
import Navbar from '../NavigationBar/navigation'
import { TRUE } from 'node-sass';

export default function EmployerForm() {
    
    // const textAreaComeUp= textAreaPopUp()
    const [showBox, setShowBox]=useState(false)


  
    return (
        <div>
            <Navbar/>
            <h1 style={{marginTop:"20px"}}>WEBX Placement Form for Employer</h1>
            <Form style={{marginTop:"40px"}}>
                <Form.Group as={Row} controlID="formHorizontalBusinessName" style={{marginBottom:"30px"}}>
                <Form.Label column sm={3} className="labelStyle" >
                    Business Name
                </Form.Label>
                <Col sm={6} >
                    <Form.Control type="businessName" id="inputToStyle" className="text-center text-md-left" />
                </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalContactPerson" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        Contact Person
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="contactPerson" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWebsite" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        Website
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="website" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWhatWeDo" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        What We Do
                    </Form.Label>
                    <Col sm={6} >
                        <Form.Control as="textarea" rows={3} type="whatWeDo" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="formHorizontalRoleOutline" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        Role Outline
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control as="textarea" rows={3} type="roleOutline" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalKeyTasks" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        Key Tasks
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control as="textarea" rows={3} type="keyTasks" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalIdealStartEndData" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                       Ideal Start/End Data
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="idealStartEndData" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalIdealLocation" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                       Location
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="location" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalHoursRequired" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        Hours Required
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="hoursRequired" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPayHours" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        Pay Role
                    </Form.Label>
                    <Col sm={6} >
                    {['radio'].map((type) => (
                        <div key={`custom-inline-${type}`} className="mb-2">
                        <Form.Check
                            custom
                            inline
                            label="WEBX Placement"
                            defaultValue = {true}
                            type={type}
                            name="formHorizontalPayHours"
                            id={`custom-inline-${type}-1`}
                            onClick={()=>setShowBox(false)}
                        />
                        <Form.Check
                            custom
                            inline
                            label="Actual Job"
                            type={type}
                            name="formHorizontalPayHours"
                            id={`custom-inline-${type}-2`}
                            onClick={()=>setShowBox(true)}
                        />
                   
                        </div>
                    ))}
                        
                    </Col>

                   <Col sm={3}>
                      {showBox? <Form.Control as="textbox" type="keyTasks" id="inputToStyle" className="text-center text-md-left" /> : null} 
                   </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="formHorizontalPhotoConsent" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3} className="labelStyle">
                        Photo Consent
                    </Form.Label>
                    <Col >
                    <Form.Label column sm={10} row sm={10}style={{color:"black", marginLeft:"1px", size:"1px 1px", paddingLeft:"1px", paddingRight:"1px"}} >
                       Photos of you allowed on website and social media
                    </Form.Label>
                    </Col>
                    <Col sm={2} style={{paddingLeft:"0px", paddingRight:"0px"}} >
                
                        <Form.Check type="radio" label="yes" name="formHorizontalPhotoConsent" id="formHorizontalPhotoConsentYes" />
                        <Form.Check type="radio" label="no" name="formHorizontalPhotoConsent" id="formHorizontalPhotoConsentNo"  />
                   
                    </Col>
                    
                    </Form.Group>
                
                    <div class="col-md-12 col-md-offset-3">
                    <Button variant="primary" type="submit" style={{marginBottom:"30px"}} >
    Submit
  </Button>
  </div>
 
            </Form>
        </div>
    )
}
