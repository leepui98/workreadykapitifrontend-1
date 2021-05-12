import { propTypes } from "react-bootstrap/esm/Image";

const headerButtons = (props) => {

    const [page, setPage] = props.functions;

return (
<div className='header'>
<button className='header-buttons' onClick={() => setPage('main')}>Dashboard</button>
<button className='header-buttons' onClick={() => setPage('students')}>Student Records</button>
<button className='header-buttons' onClick={() => setPage('employers')}>Employer Records</button>
<br/>
</div>
);
}

export default headerButtons;

