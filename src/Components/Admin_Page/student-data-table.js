import { RowingSharp } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import DataTable from './DataTable/index.js';
import MockData from './mockData.json';
import { CSVLink, CSVDownload } from "react-csv";
import './admin.css';

require ("es6-promise").polyfill();
require("isomorphic-fetch");

export default function StudentTable() {

const [data, setData] = useState([]);
const [q, setQ] = useState("");
const [searchColumns, setSearchColumns] = useState(["fullName", "phoneNumber", "email"])

useEffect(() => { 
  fetch("http://localhost:3000/students").then((response) => response.json()).then(json => setData(json)) 
}, []);

function search(rows) {
  return rows.filter(
    (row) => searchColumns.some(
      (column) => row[column].toString().toLowerCase().indexOf(q) > -1
    )
  );
}

const columns = data[0] && Object.keys(data[0]);
return (
<div>
    <h1>Students</h1>
    <CSVLink data={data}  filename={"WRK-students.csv"}>Download Student 
    Data as CSV<br/><br/></CSVLink>
  <div>
<input type="text" value={q} width='100%' placeholder="Enter Search Term" onChange={(e) => setQ(e.target.value)}/>
  {
    columns && columns.map(column => <label id="filters">
      <input type="checkbox" checked={searchColumns.includes(column)}
      onChange={(e) => { const checked = searchColumns.includes(column)
      setSearchColumns(prev => checked
        ? prev.filter(sc => sc !== column)
        : [...prev, column]
        
        )
      } }
      />
      {column}
    </label>)
  }
  </div>
  <div>
<DataTable
className='student-table'
data={search(data)}
/>
  </div>
  </div>

)

}

