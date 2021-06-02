import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'

import React from 'react'

export default function jobPost({jobpost}) {
   const[extend,setExtend]= useState(false)
   
    return (
        <Card className="mb-3">
            <Card.Body>
            <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.pay}</Badge>
            <Badge variant="secondary">{job.hours}</Badge>
            <Badge variant="secondary">{job.startDate}</Badge>
          </div>
          <div className="text-muted d-none d-md-block" height="50" alt={job.company} src={job.company_logo}>
          {new Date(job.created_at).toLocaleDateString()}
              </div>
        </div>
        <Card.Text>
          <Button
            onClick={() => setExtend(prevExtend => !prevExtend)}
            variant="primary"
          >
            {extend ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={extend}>
          <div className="mt-4">
           {job.description} 
          </div>
        </Collapse>
            </Card.Body>

        </Card>
    )
}
