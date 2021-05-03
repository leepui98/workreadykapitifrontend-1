import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { getDefaultNormalizer } from '@testing-library/dom';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createStudent(id, name, phoneNumber, email, dateCreated, lastContact, contactNotes) {
    return {id, name, phoneNumber, email, dateCreated, lastContact, contactNotes};
  }
  
  
  //students
  const studentRows = [
    createStudent('1', 'Max Spijkerbosch', '027000000', 'max@gmail.com', '03/05/21 at 11:07am', '2 weeks ago', 'Completing passport. Will arrange meeting next time I email/call him.'),
    createStudent('2', 'Raj', '021111111', 'raj@gmail.com', '03/05/21 at 11:39am', 'never', 'No notes'),
    createStudent('3', 'Martin', '02222222', 'martin@gmail.com', '03/05/21 at 11:45am', 'never', 'No notes'),
    createStudent('4', 'PuiLi', '021444444', 'PuiLi@gmail.com', '03/05/21 at 11:49am', 'never', 'No notes'),
  ];

const StudentTable = ( props ) => {
    const classes = useStyles();
return (
<TableContainer component={Paper}>
         <h1>Students</h1>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>ID: </TableCell>
            <TableCell>Student Name: </TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Last Contacted</TableCell>
            <TableCell>Contact Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.dateCreated}</TableCell>
              <TableCell>{row.lastContact}</TableCell>
              <TableCell>{row.contactNotes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);
}

export default StudentTable;