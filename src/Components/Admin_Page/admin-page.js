import React, {useState} from 'react';
import HeaderButtons from './headerbuttons';
import StudentTable from './DataTable/student-data-table';
import EmployerTable from './DataTable/employer-data-table';
import StudentProfile from './ProfileViews/Student-Profile-View';
import Grid from '@material-ui/core/Grid';
import SignUpMetricTotal from './metric-modules/signuptotals';
import Todos from './Todos/TodoList';

const AdminPage = () => {

    const [page, setPage] = useState("main");

      switch(page) {

        //Main & home section of admin page. holds student and employer tables
        case "main":
            return (
            <div>
                <div className='admin-page-header'>
                <HeaderButtons
            functions={
                [page, setPage]  
            }
            />
            </div>
            <Grid container spacing={2}>
            <Grid item xs={4}>
            <div className="admin-page-module-import">
           <SignUpMetricTotal/>
            </div>
            </Grid>
            <Grid item xs={8}>
            <Todos/>
            </Grid>
            </Grid>
            </div>
            
              );

              //Student section of admin page. Has student table and student profile view.
        case "students":
            return (
            <div>
                <div className='admin-page-header'>
            <HeaderButtons
            functions={[page, setPage]}
            />
            <br/>
            <StudentTable/>
            </div> 
            </div>
            );

                //Employer section of admin page. Has employer table and employer profile view.
        case "employers":
            return (
            <div className='admin-page-header'>
            <HeaderButtons
            functions={[page, setPage]}
            />
            <br/>
            <EmployerTable/>
            <br/>
            </div> 
            );
      }

}

export default AdminPage;