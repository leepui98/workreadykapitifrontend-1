import { RowingSharp } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import DataTable from './DataTable/index.js';
import MockData from './mockData.json';
import { CSVLink, CSVDownload } from "react-csv";
import './admin.css';

require ("es6-promise").polyfill();
require("isomorphic-fetch");

export default function EmployerTable() {

const [data, setData] = useState([]); //json data
const [q, setQ] = useState(""); //query
const [searchColumns, setSearchColumns] = useState(["Full Name"]) //for the checkbox filters
const [isEditable, setIsEditable] = useState('false');

// fetch json data and set the data in our data array
useEffect(() => { 
  fetch("http://localhost:3000/employers").then((response) => response.json()).then(json => setData(json)) 
  }, []);

// function to search through json data (rows)
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
    <h1>Employers</h1>
    <CSVLink data={data}  filename={"WRK-employers.csv"}>Download Employer Data as CSV<br/><br/></CSVLink>
    <button>Add Employer</button>
  <div>
    <br/>
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
data={search(data)}
/>
  </div>
  </div>

)

}

