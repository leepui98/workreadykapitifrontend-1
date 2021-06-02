import React from 'react'
import { Form, Col, Row} from "react-bootstrap";
import "./_employerAddJob.scss";

export default function employerForm() {
    return (
        <div>
            <Form style={{marginTop:"40px"}}>
                <Form.Group as={Row} controlID="formHorizontalBusinessName" >
                <Form.Label column sm={3} className="labelStyle">
                    Business Name
                </Form.Label>
                <Col sm={6} >
                    <Form.Control type="businessName" id="inputToStyle" className="text-center text-md-left" />
                </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalContactPerson" >
                    <Form.Label column sm={3} className="labelStyle">
                        Contact Person
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="contactPerson" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWebsite" >
                    <Form.Label column sm={3} className="labelStyle">
                        Website
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="website" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWhatWeDo" >
                    <Form.Label column sm={3} className="labelStyle">
                        What We Do
                    </Form.Label>
                    <Col sm={6} >
                        <Form.Control as="textarea" rows={3} type="whatWeDo" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="formHorizontalRoleOutline" >
                    <Form.Label column sm={3} className="labelStyle">
                        Role Outline
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control as="textarea" rows={3} type="roleOutline" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalKeyTasks" >
                    <Form.Label column sm={3} className="labelStyle">
                        Key Tasks
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control as="textarea" rows={3} type="keyTasks" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalIdealStartEndData" >
                    <Form.Label column sm={3} className="labelStyle">
                       Ideal Start/End Data
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="idealStartEndData" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalHoursRequired" >
                    <Form.Label column sm={3} className="labelStyle">
                        Hours Required
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="hoursRequired" id="inputToStyle" className="text-center text-md-left"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPhotoConsent" >
                    <Form.Label column sm={3} className="labelStyle">
                        Photo Consent
                    </Form.Label>
                    <Col  >
                    <Form.Label column sm={10} >
                       Photos of you allowed on website and social media
                    </Form.Label>
                    </Col>
                    <Col sm={2} >
                
                        <Form.Check type="radio" label="yes" name="formHorizontalPhotoConsent" id="formHorizontalPhotoConsentYes"/>
                        <Form.Check type="radio" label="no" name="formHorizontalPhotoConsent" id="formHorizontalPhotoConsentNo" />
                   
                    </Col>
                    </Form.Group>
            </Form>
        </div>
    )
}
