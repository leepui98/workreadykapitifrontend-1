import React,{useState} from 'react'

const hooksShowHide = (textBoxComponent, showHideText=false) => {
    const[showHide, setShowHide]=useState(()=>showHideText);
    return[false ? textBoxComponent:null, ()=>setShowHide((sh)=>!sh)];
}

export default hooksShowHide
