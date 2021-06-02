import React from 'react';
import { Form, Button} from "react-bootstrap";

export default function ApplyWindow(){
    return(
        <Form>
            <Form.Control as="textarea" rows={4} type="applyMessagetoSend" className="text-center text-md-left" placeholder="Type in message and apply..." style={{marginBottom:"30px", marginTop:"30px", marginLeft:"15px", marginRight:"15px", width:"80%"}}/>
            <Button variant="primary" type="submit" style={{marginBottom:"30px"}} >
             Submit
            </Button>
       
        </Form>
    );
}