import React,{useState} from 'react'

const HooksShowHide = (textBoxComponent, showHideText=false) => {
    const[showHide, setShowHide]=useState(()=>showHideText);
    return[setShowHide((sh)=>!sh)];
}

export default HooksShowHide
