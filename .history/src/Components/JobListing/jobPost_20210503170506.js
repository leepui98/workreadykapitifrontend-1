import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import{mockData} from './mockData'


import React from 'react'

export default function jobPost({job}) {
   const[extend,setExtend]= useState(false)
   
   {mockData.map((data)=>{
    return (
        <Card className="mb-3">
            <Card.Body>
            <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {data.jobtitle} - <span className="text-muted font-weight-light">{data.companyname}</span>
            </Card.Title>
            {/* <Card.Subtitle className="text-muted mb-2">
              {new Date(data.listdate).toLocaleDateString()}
            </Card.Subtitle> */}
            <Badge variant="secondary" className="mr-2">{data.jobhours}</Badge>
            <Badge variant="secondary">{data.jobpay}</Badge>
            <Badge variant="secondary">{data.startdate}</Badge>
          </div>
          <div className="text-muted d-none d-md-block">
          {new Date(job.created_at).toLocaleDateString()}
              </div>
        </div>
        <Card.Text>
          <Button
            onClick={() => setExtend(prevExtend => !prevExtend)}
            variant="primary"
          >
            {extend ? 'Hide' : 'Extend'}
          </Button>
        </Card.Text>
        <Collapse in={extend}>
          <div className="mt-4">
           {data.jobdescription} 
          </div>
        </Collapse>
        )
            </Card.Body>

        </Card>  
    )
})}
}
