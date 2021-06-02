import React from 'react'
import { Form, Col, Row} from "react-bootstrap";
import "./_employerAddJob.scss";

export default function employerForm() {
    return (
        <div>
            <Form style={{marginTop:"40px"}}>
                <Form.Group as={Row} controlID="formHorizontalBusinessName" style={{marginBottom:"30px"}}>
                <Form.Label column sm={3}>
                    Business Name
                </Form.Label>
                <Col sm={2}>
                    <Form.Control type="businessName" id="inputToStyle"/>
                </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalContactPerson" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                        Contact Person
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="contactPerson" className="inputToStyle"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWebsite" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                        Website
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="website" className="inputToStyle"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWhatWeDo" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                        What We Do
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="whatWeDo" className="inputToStyle"/>
                    </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="formHorizontalRoleOutline" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                        Role Outline
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="roleOutline" className="inputToStyle"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalKeyTasks" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                        Key Tasks
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="keyTasks" className="inputToStyle"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalIdealStartEndData" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                       Ideal Start/End Data
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="idealStartEndData" className="inputToStyle"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalHoursRequired" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                        Hours Required
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control type="hoursRequired" className="inputToStyle"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPhotoConsent" style={{marginBottom:"30px"}}>
                    <Form.Label column sm={3}>
                        Photo Consent
                    </Form.Label>
                    <Col  >
                    <Form.Label column sm={10}>
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
