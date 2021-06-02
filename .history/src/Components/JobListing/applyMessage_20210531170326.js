import React from 'react';
import { Form, Button} from "react-bootstrap";

export default function ApplyWindow(){
    return(
        <Form>
            <Form.Control as="textarea" rows={4} type="applyMessagetoSend" className="text-center text-md-left" placeholder="Type in message and apply..." style={{marginBottom:"30px", marginTop:"30px", marginLeft:"10px", marginInlineEnd:"10px"}}/>
            <Button variant="primary" type="submit" style={{marginBottom:"30px"}} >
             Submit
            </Button>
       
        </Form>
    );
}