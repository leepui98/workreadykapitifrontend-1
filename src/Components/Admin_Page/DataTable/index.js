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
          maxHeight: 250,
        },
      });

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
    <Paper className={useStyles.root}>
    <TableContainer className={useStyles.container}>
    <Table id='table-container' cellPadding={8} cellSpacing={8}>
    <TableHead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
    </TableHead>
    <TableBody contentEditable="true">
{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => <tr>
    {
columns.map(column => <td height="100px">{row[column]}</td>)
    }
</tr>)}
    </TableBody>
    </Table>
    <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </TableContainer>
    </Paper>
    </div>
)

}