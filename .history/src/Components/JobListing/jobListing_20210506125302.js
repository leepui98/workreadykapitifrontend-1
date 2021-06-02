import React, { useState } from 'react';
import fetchJob from './useFetchJob'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavigationBar/navigation';
import JobPost from './jobPost'
import {Pagination} from 'antd';
// import {mockData} from './mockData'
// import Table from './table';

const cardEachPage= 5

const [page,setPage]=useState({minValue:0, maxValue:1});
function HandleChange (value){
    setPage({
        maxValue:(value-1) * cardEachPage,
        maxValue: value * cardEachPage
    })
}

export default function JobListing(){
   
    
    const mockData =
[
    {jobtitle:"Assistant Media Planner",companyname:"Tagfeed",jobhours:'7hrs',jobpay:'$22',startdate:"start 11/13/2020",jobdescription:"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",listdate:"12/17/2020"},
    {jobtitle:"Database Administrator II",companyname:"Skalith",jobhours:'8hrs',jobpay:'$21',startdate:"start 5/23/2020",jobdescription:"lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit",listdate:"1/1/2021"},
    {jobtitle:"Software Test Engineer II",companyname:"Miboo",jobhours:'3hrs',jobpay:'$23',startdate:"start 11/6/2020",jobdescription:"sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",listdate:"2/16/2021"},
    {jobtitle:"Tax Accountant",companyname:"Twitterworks",jobhours:'2hrs',jobpay:'$23',startdate:"start 6/27/2020",jobdescription:"vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec",listdate:"3/17/2021"},
    {jobtitle:"Budget/Accounting Analyst I",companyname:"Nlounge",jobhours:'2hrs',jobpay:'$21',startdate:"start 11/12/2020",jobdescription:"nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend",listdate:"12/12/2020"},
    {jobtitle:"Structural Engineer",companyname:"Aimbo",jobhours:'6hrs',jobpay:'$21',startdate:"start 3/30/2021",jobdescription:"suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",listdate:"10/25/2020"},
    {jobtitle:"Safety Technician I",companyname:"Yambee",jobhours:'4hrs',jobpay:'$22',startdate:"start 9/19/2020",jobdescription:"congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non",listdate:"2/16/2021"},
    {jobtitle:"Chief Design Engineer",companyname:"Zoozzy",jobhours:'4hrs',jobpay:'$23',startdate:"start 6/24/2020",jobdescription:"rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",listdate:"11/21/2020"},
    {jobtitle:"Database Administrator I",companyname:"Shuffletag",jobhours:'5hrs',jobpay:'$21',startdate:"start 6/14/2020",jobdescription:"magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",listdate:"5/2/2020"},
    {jobtitle:"GIS Technical Architect",companyname:"Centizu",jobhours:'8hrs',jobpay:'$21',startdate:"start 2/17/2021",jobdescription:"mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",listdate:"3/13/2021"},
    {jobtitle:"Analyst Programmer",companyname:"Wikivu",jobhours:'3hrs',jobpay:'$23',startdate:"start 7/12/2020",jobdescription:"nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula",listdate:"6/29/2020"},
    {jobtitle:"Food Chemist",companyname:"Yamia",jobhours:'7hrs',jobpay:'$23',startdate:"start 10/7/2020",jobdescription:"sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque",listdate:"4/30/2020"},
];
    
    // const jobTitle=props.titleJob;
    // const companyName=props.nameCompany;
    // const jobHours=props.hours;
    // const jobPay=props.pay;
    // const startDate=props.dateStart;
    // const jobDescription=props.description;
    // const listDate=props.dateList;

    // const jobTitle="Graduate developer";
    // const companyName="MapleLilly";
    // const jobHours="8 hours per day weekday";
    // const jobPay="22/hr";
    // const startDate="21/8/22";
    // const jobDescription="blablablablablablablacksheep";
    // const listDate="20/4/22";

    // const [params, setParams] = useState({})
    // const [page, setPage] = useState(1)
    // const {jobs,loading, error, hasNextPage } = fetchJob(params, page)
  
    // function handleParamChange(e) {
    //   const param = e.target.name
    //   const value = e.target.value
    //   setPage(1)
    //   setParams(prevParams => {
    //     return { ...prevParams, [param]: value }
    //   })
    // }

    
   
     
    //     mockData.map((data)=>{
    //         console.log(data);
    //     });
  
    return(
        <div>
        <NavBar/>
        {/* <div class="d-flex justify-content-center align-items-center" style={{height:"100%", width:"100%", paddingLeft:"50px", paddingTop:"50px"}}> */}
        {/* <Table
        data={Data}
        key={`${Data.companyname}-${Data.jobtitle}`}
        /> */}
        {/* <Table/> */}
        <Container className="my-4">
      {/* <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>} */}
      {/* {jobs.map(jobPost => {
        return <jobPost key={jobPost.id} jobPost={jobPost} />
      })} */}
      <Pagination defaultCurrent={1} defaultPageSize={cardEachPage} onChange={HandleChange()} total={5}/>
        {mockData && mockData.length>0 && mockData.slice(page.minValue,page.maxValue).map(data => {
          return(<JobPost jobdata={data} />)
      })}  
    
  
    <Pagination defaultCurrent={1} defaultPageSize={cardEachPage} onChange={HandleChange()} total={5}/>
      {/* <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
    </Container>
        </div>
        
    );
}