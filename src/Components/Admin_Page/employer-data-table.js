import { Grid } from '@material-ui/core';
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
  
  function createEmployer(id, name, phoneNumber, email, dateCreated, lastContact, contactNotes) {
    return {id, name, phoneNumber, email, dateCreated, lastContact, contactNotes };
  }
  
  //employers
  const employerRows = [
      createEmployer('1', 'Bob the builder', '027-CANWEFIXIT', 'bob@building.com', '03/05/21 at 2:15pm', '4/05/21 at 2:15pm', 'Bob was on holiday for two week in Auckland buying a new digger. Wants students who are interested in building apprenticeships.'),
  ];
  

export default function EmployerTable() {
    const classes = useStyles();
return (
<TableContainer component={Paper}>
      <h1>Employers</h1>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Employer Name: </TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Last Contacted</TableCell>
            <TableCell>Contact Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employerRows.map((row) => (
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