import React, {useState} from 'react';
import HeaderButtons from './headerbuttons';
import StudentTable from './student-data-table';
import EmployerTable from './employer-data-table';
import './admin.css';

const AdminPage = () => {

    const [page, setPage] = useState("main"); //step will be used for switch cases between each conponentised page of the WRKP.

      switch(page) {

        case "main":
            return (
            <body>
            <HeaderButtons
            functions={
                [page, setPage]
            
            }
            />
            <br/>
            <StudentTable/>
            <br/>
            <EmployerTable/>
            </body>
              );

        case "students":
            return (
            <body>
            <HeaderButtons
            functions={[page, setPage]}
            />
            <br/>
            <StudentTable/>
            </body> 
            );

        case "employers":
            return (
            <body>
            <HeaderButtons
            functions={[page, setPage]}
            />
            <br/>
            <EmployerTable/>
            </body> 
            );
      }

}

export default AdminPage;