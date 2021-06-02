import React,{useState} from 'react'

const hooksShowHide = (textBoxComponent, showHide=false) => {
    const[showHide, setShowHide]=useState(()=>showHide);
    return[false ? textBoxComponent:null, ()=>showHide((sh)=>!sh)];
}

export default hooksShowHide
