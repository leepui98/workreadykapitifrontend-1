import { propTypes } from "react-bootstrap/esm/Image";

const headerButtons = (props) => {

    const [page, setPage] = props.functions;

return (
<div className='header'>
<button className='header-buttons' onClick={() => setPage('main')}>All Contacts</button>
<button className='header-buttons' onClick={() => setPage('students')}>Students</button>
<button className='header-buttons' onClick={() => setPage('employers')}>Employers</button>
<br/>
</div>
);
}

export default headerButtons;

