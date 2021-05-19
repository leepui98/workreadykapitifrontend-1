import React,{useState} from 'react'

const HooksShowHide = (textBoxComponent, showHideText=false) => {
    const[showHide, setShowHide]=useState(()=>showHideText);
    return[showHide ? textBoxComponent:null, ()=>setShowHide((sh)=>!sh)];
}

export default HooksShowHide
