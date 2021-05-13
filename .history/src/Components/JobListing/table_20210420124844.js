import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';



export default function Table(columns,data,key){
    const buildTable = ({ columns, data, propertyAsKey }) => //Deconstructs your props
    {
        return(
    <table className='jobListingtable'>
        <tbody>
            {data.map(item =>
                <tr key={`${item[propertyAsKey]}-row`}>
                    {columns.map(col => <td key={`${item[propertyAsKey]}-${col.property}`}>{item[col.property]}</td>)}
                </tr>
            )}
        </tbody>
    </table>
    );
            }
}
   

// export default function cardBlock(){
//     return(
//         <Card style={{ width: '50rem' }}>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//     <Card.Text>
//       Content pending to fill up.... will need to have props content to fill up
//     </Card.Text>
//     <Card.Link href="#">Save</Card.Link>
//     <Card.Link href="#">Apply</Card.Link>
//   </Card.Body>
// </Card>
  
// );
// }

// const tableStyles = makeStyles((theme) => ({
//     root: {
//       flexShrink: 0,
//       marginLeft: theme.spacing(2.5),
//     },
//   })); 

//   function TablePaginationActions(props) {
//     const classes = tableStyles();
//     const theme = useTheme();
//     const { count, page, rowsPerPage, onChangePage } = props;
  
//     const handleFirstPageButtonClick = (event) => {
//       onChangePage(event, 0);
//     };
  
//     const handleBackButtonClick = (event) => {
//       onChangePage(event, page - 1);
//     };
  
//     const handleNextButtonClick = (event) => {
//       onChangePage(event, page + 1);
//     };
  
//     const handleLastPageButtonClick = (event) => {
//       onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//     };
  
//     return (
//       <div className={classes.root}>
//         <IconButton
//           onClick={handleFirstPageButtonClick}
//           disabled={page === 0}
//           aria-label="first page"
//         >
//           {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//         </IconButton>
//         <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//         </IconButton>
//         <IconButton
//           onClick={handleNextButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="next page"
//         >
//           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//         </IconButton>
//         <IconButton
//           onClick={handleLastPageButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="last page"
//         >
//           {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//         </IconButton>
//       </div>
//     );
//   }

//   TablePaginationActions.propTypes = {
//     count: PropTypes.number.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     page: PropTypes.number.isRequired,
//     rowsPerPage: PropTypes.number.isRequired,
//   };



//   function createData(jobTitle, companyName, jobHours, jobPay, startDate, jobDescription, listDate) {
//     return {jobTitle, companyName, jobHours, jobPay, startDate, jobDescription, listDate};
//   }

//   const rows=[
//       createData(props.titlejob, props.nameCompany, props.hours, props.jobPay, props.startDate, props.jobDescription, props.listDate)
//   ]
