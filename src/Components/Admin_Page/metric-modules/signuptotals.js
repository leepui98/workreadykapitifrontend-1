import react, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

require ("es6-promise").polyfill();
require("isomorphic-fetch");

export default function SignUps () {

    const [studentTotal, setStudentTotal] = useState([]); //Total amount of students
    const [employerTotal, setEmployerTotal] = useState([]); //Total amount of Employers
    const [studentNew, setStudentNew] = useState([]); //Total amount of students
    const [employerNew, setEmployerNew] = useState([]); //Total amount of Employers


useEffect(() => { 
    fetch("http://localhost:3000/students").then((response) => response.json()).then(json => setStudentTotal(json.length)) 
    });

    useEffect(() => { 
        fetch("http://localhost:3000/employers").then((response) => response.json()).then(json => setEmployerTotal(json.length)) 
        });

    return (
        <body>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={6}>
<div className="admin-page-metric-modules-total">
    <h5><br/>Total Students:</h5>
<h5>{studentTotal}</h5>
<h5><br/>Total Employers:</h5>
<h5>{employerTotal}</h5>
</div>
</Grid>
<Grid item xs={6}>
<div className="admin-page-metric-modules-total">
    <h5><br/>New Students:</h5>
<h5>+{studentTotal}</h5>
<h5><br/>New Employers:</h5>
<h5>+{employerTotal}</h5>
</div>
</Grid>
<Grid item xs={12}>
<div>
    <h2><br/>Approve New Students:</h2>
    <h2><br/>Approve New Employers:</h2>
    <h2><br/>Approve New Students:</h2>
    <h2><br/>View Jobs:</h2>
</div>
</Grid>
</Grid>
</body>
    );

}
