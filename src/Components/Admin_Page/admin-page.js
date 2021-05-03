import React from 'react';
import HeaderButtons from './headerbuttons';
import StudentTable from './student-data-table';
import EmployerTable from './employer-data-table';
import './admin.css';

export default function AdminPage() {

  return (
      <body>
         <HeaderButtons/>
         <br/>
        <StudentTable/>
        <br/>
        <EmployerTable/>
    </body>
  );
}