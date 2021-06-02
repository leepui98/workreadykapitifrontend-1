import { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
// import{mockData} from './mockData'
import React from 'react'

const JobPost= props => {
   const[extend,setExtend]= useState(false)


//    const mockData = 
// [
// {jobtitle:"Assistant Media Planner",companyname:"Tagfeed",jobhours:7,jobpay:22,startdate:"11/13/2020",jobdescription:"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",listdate:"12/17/2020"},
// {jobtitle:"Database Administrator II",companyname:"Skalith",jobhours:8,jobpay:21,startdate:"5/23/2020",jobdescription:"lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit","listdate":"1/1/2021"},
// {jobtitle:"Software Test Engineer II",companyname:"Miboo",jobhours:3,jobpay:23,startdate:"11/6/2020",jobdescription:"sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien","listdate":"2/16/2021"},
// {jobtitle:"Tax Accountant",companyname:"Twitterworks",jobhours:2,jobpay:23,startdate:"6/27/2020",jobdescription:"vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec",listdate:"3/17/2021"},
// {jobtitle:"Budget/Accounting Analyst I",companyname:"Nlounge",jobhours:2,jobpay:21,startdate:"11/12/2020",jobdescription:"nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend",listdate:"12/12/2020"},
// {jobtitle:"Structural Engineer",companyname:"Aimbo",jobhours:6,jobpay:21,startdate:"3/30/2021",jobdescription:"suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor","listdate":"10/25/2020"},
// {jobtitle:"Safety Technician I",companyname:"Yambee",jobhours:4,jobpay:22,startdate:"9/19/2020",jobdescription:"congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non","listdate":"2/16/2021"},
// {jobtitle:"Chief Design Engineer",companyname:"Zoozzy",jobhours:4,jobpay:23,startdate:"6/24/2020",jobdescription:"rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",listdate:"11/21/2020"},
// {jobtitle:"Database Administrator I",companyname:"Shuffletag",jobhours:5,jobpay:21,startdate:"6/14/2020",jobdescription:"magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi","listdate":"5/2/2020"},
// {jobtitle:"GIS Technical Architect",companyname:"Centizu",jobhours:8,jobpay:21,startdate:"2/17/2021",jobdescription:"mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan","listdate":"3/13/2021"},
// {jobtitle:"Analyst Programmer",companyname:"Wikivu",jobhours:3,jobpay:23,startdate:"7/12/2020",jobdescription:"nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula","listdate":"6/29/2020"},
// {jobtitle:"Food Chemist",companyname:"Yamia",jobhours:7,jobpay:23,startdate:"10/7/2020",jobdescription:"sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque",listdate:"4/30/2020"},
// ];
//     console.log(mockData);
//    {mockData.map((data)=>{
    return (
       

        <Card className="mb-3">
            {console.log(props)}
            <Card.Body>
            <div className="d-flex justify-content-between">
                
        
            <Card.Title>
              {props.jobdata.jobtitle} - <span className="text-muted font-weight-light">{props.jobdata.companyname}</span>
            </Card.Title>
            {/* <Card.Subtitle className="text-muted mb-2">
              {new Date(data.listdate).toLocaleDateString()}
            </Card.Subtitle> */}
            </div>
            <div>
            <Badge variant="secondary" className="mr-2">{props.jobdata.jobhours}</Badge>
            <Badge variant="secondary" className="mr-2">{props.jobdata.jobpay}</Badge>
            <Badge variant="secondary" className="mr-2">{props.jobdata.startdate}</Badge>
          </div>
          <div className="text-muted d-none d-md-block">
          {props.jobdata.listdate}
              </div>
    
        <Card.Text>
          <Button
            onClick={() => setExtend(prevExtend => !prevExtend)}
            variant="primary"
          >
            {extend ? 'Hide' : 'View Job Description'}
          </Button>
        </Card.Text>
        <Collapse in={extend}>
          <div className="mt-4">
           {props.jobdata.jobdescription} 
          </div>
        </Collapse>

            </Card.Body> 

        </Card>  
    )

}
export default JobPost;