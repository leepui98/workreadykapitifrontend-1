import React from 'react'
import { Form, Col, Row} from "react-bootstrap";

export default function employerForm() {
    return (
        <div>
            <Form style={{marginTop:"40px"}}>
                <Form.Group as={Row} controlID="formHorizontalBusinessName" >
                <Form.Label column sm={3}>
                    Business Name
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="businessName" />
                </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalContactPerson">
                    <Form.Label column sm={3}>
                        Contact Person
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="contactPerson"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWebsite">
                    <Form.Label column sm={3}>
                        Website
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="website"/>
                    </Col>
                    </Form.Group> 
                <Form.Group as={Row} controlId="formHorizontalWhatWeDo">
                    <Form.Label column sm={3}>
                        What We Do
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="whatWeDo"/>
                    </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="formHorizontalRoleOutline">
                    <Form.Label column sm={3}>
                        Role Outline
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="roleOutline"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalKeyTasks">
                    <Form.Label column sm={3}>
                        Key Tasks
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="keyTasks"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalIdealStartEndData">
                    <Form.Label column sm={3}>
                       Ideal Start/End Data
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="idealStartEndData"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalHoursRequired">
                    <Form.Label column sm={3}>
                        Hours Required
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="hoursRequired"/>
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPhotoConsent">
                    <Form.Label column sm={3}>
                        Photo Consent
                    </Form.Label>
                    <Col sm={5}>
                
                    <Form.Label column sm={3}>
                       Photos of you allowed on website and social media
                    </Form.Label>
                        <Form.Check type="radio" label="yes" name="formHorizontalPhotoConsent" id="formHorizontalPhotoConsentYes"/>
                        <Form.Check type="radio" label="no" name="formHorizontalPhotoConsent" id="formHorizontalPhotoConsentNo"/>
                   
                    </Col>
                    </Form.Group>
            </Form>
        </div>
    )
}
