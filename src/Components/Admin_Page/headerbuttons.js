import { propTypes } from "react-bootstrap/esm/Image";

const headerButtons = (props) => {

    const [page, setPage] = props.functions;

return (
<div className='header'>
<button className='header-buttons' onClick={() => setPage('main')}>All Contacts</button>
<button className='header-buttons' onClick={() => setPage('students')}>Student Contacts</button>
<button className='header-buttons' onClick={() => setPage('employers')}>Employer Contacts</button>
<button className='header-buttons'>Update Contact</button>
<button className='header-buttons'>Search Contact</button>
<button className='header-buttons'>Remove Contact</button>
<button className='header-buttons'>Add Contact</button>
<br/>
</div>
);
}

export default headerButtons;

