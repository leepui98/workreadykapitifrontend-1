import React from 'react'
import { Form, Col, Row, Button,row} from "react-bootstrap";
import "./_employerAddJob.scss";

export default function employerForm() {
    return (
        <div>
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
                        Pay Per Hour
                    </Form.Label>
                    <Col sm={6} key={`custom-inline`}>
                    
                        <Form.Check
                        type="radio"
                        label="WEBX Placement"
                        name="formHorizontalPayHours"
                        id="formHorizontalWEBX"
                        />
                        <Form.Check
                        type="radio"
                        label="Job with Pay"
                        name="formHorizontalPayHours"
                        id="formHorizontalActualJob"
                        />
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
