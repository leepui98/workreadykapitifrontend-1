import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export default function DataTable({data}) {

const [page, setPage] = useState(0); //pagintation state
const [rowsPerPage, setRowsPerPage] = useState(5); //rows per page for pagination

const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 600,
          minHeight: 600
        },
      });

const classes = useStyles();

//change page in table
const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
//change how many rows are displayed on each page of the table.
const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

const columns = data[0] && Object.keys(data[0])
return (
  <div>
    <Paper className={classes.root}>
    <TableContainer className={classes.container}>
    <Table cellPadding={8} cellSpacing={8} stickyHeader>
    <TableHead>
        <TableRow>{data[0] && columns.map((heading) => <TableCell>{heading}</TableCell>)}</TableRow>
    </TableHead>
    <TableBody>
{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => <TableRow>
    {
columns.map(column => <TableCell contentEditable='true' height="100px">{row[column]}</TableCell>)
    }
</TableRow>)}
    </TableBody>
    </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
)

}