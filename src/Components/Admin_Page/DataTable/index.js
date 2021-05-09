import React from 'react';
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
const columns = data[0] && Object.keys(data[0])
return (
  <div>
    <table cellPadding={8} cellSpacing={8} width='100%'>
    <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>

    </thead>
    <tbody contentEditable="true">
{data.map(row => <tr>
    {
columns.map(column => <td height="100px">{row[column]}</td>)
    }
</tr>)}
    </tbody>
    </table>
    </div>
)

}