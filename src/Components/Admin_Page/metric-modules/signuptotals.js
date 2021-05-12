import react, {useState, useEffect} from 'react';

require ("es6-promise").polyfill();
require("isomorphic-fetch");

export default function SignUps () {

    const [studentTotal, setStudentTotal] = useState([]); //Total amount of students
    const [employerTotal, setEmployerTotal] = useState([]); //Total amount of Employers

useEffect(() => { 
    fetch("http://localhost:3000/students").then((response) => response.json()).then(json => setStudentTotal(json.length)) 
    });

    useEffect(() => { 
        fetch("http://localhost:3000/employers").then((response) => response.json()).then(json => setEmployerTotal(json.length)) 
        });

    return (
        <body>
            <br/>
<div className="admin-page-metric-modules-total">
    <h5><br/>Total Students:</h5>
<h5>{studentTotal}</h5>
<h5><br/>Total Employers:</h5>
<h5>{employerTotal}</h5>
</div>
</body>
    );

}
