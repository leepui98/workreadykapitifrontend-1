import React, {useState} from 'react';
import HeaderButtons from './headerbuttons';
import StudentTable from './student-data-table';
import EmployerTable from './employer-data-table';
import './admin.css';
import StudentProfile from './ProfileViews/Student-Profile-View';

const AdminPage = () => {

    const [page, setPage] = useState("main");

      switch(page) {

        //Main & home section of admin page. holds student and employer tables
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

              //Student section of admin page. Has student table and student profile view.
        case "students":
            return (
            <body>
            <HeaderButtons
            functions={[page, setPage]}
            />
            <br/>
            <StudentTable/>
            <br/>
            <StudentProfile/>
            </body> 
            );

                //Employer section of admin page. Has employer table and employer profile view.
        case "employers":
            return (
            <body>
            <HeaderButtons
            functions={[page, setPage]}
            />
            <br/>
            <EmployerTable/>
            <br/>
            </body> 
            );
      }

}

export default AdminPage;