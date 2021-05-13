import React, {useState} from 'react';
import Pagination from "react-js-pagination";

export default function Pagination(){
    const [page,setPage]= useState(1);
    const pageHandler=(event,value)=>{
        setPage(value);
    };

    return(
        <div>
            <Pagination count={6} page={page} onChange={pageHandler} />
        </div>
    );
}
