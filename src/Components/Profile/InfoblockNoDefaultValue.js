import React, { useState,useEffect } from "react";
import "./_infoblock.scss";
import { EditOutlined,PlusOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";


const { TextArea } = Input;
// const titleName= props =>{
//     return(
//         {props.name}
//     )
// }

// function useInput({type}) {
//     const [value, setValue] = useState("ohnononono");
//     const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
//     return [value, input];
//   }
// function PreviousText(value){
//     const ref= useRef();
//     useEffect(()=>{
//         ref.current=value;
//     });
//     return ref.current;
// }


export default function Infoblock(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [context, setContext] = useState(props.contextInput);
//   const valueRef= useRef(context);
  
//   const[yesNoContext,setContext]=useState(context)

  const [update, setUpdate] = useState(false);
//  const prevContext= PreviousText(context)
 
// const updateFalse=()=>{
//     return(<p>{context}</p>,setUpdate(false))
// }

  const saveText = (valueInput) => {
    setContext(valueInput.target.value);
    setUpdate(false);
  };

//   useEffect(()=>{
//       const timeOut= setTimeout(()=>setContext(context),3000);
//       return()=>clearTimeout(timeOut);}
//  ,[context]);

  
  const showModal = () => {
    setIsModalVisible(true);
  };

  
  const handleOk = () => {
    // e.preventDefault();
    // setContext(`${valueRef.current.value}`);
    // const putContext=valueRef.current.getContext();
    // setContext(putContext);
    // console.log(`${valueRef.current.value}`)
    setUpdate(true);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  
//   const [infotitle, setTitle] = useState({ title: "About" });
  // const[infotext,setInfo] = useInput({ type: "text" });;
 
return (

<div>
    <div>
  <div class="card" className="infosection">
    <div class="card-header">
      {props.name}
      <EditOutlined
        className="editIcon"
        style={{ fontSize: "20px" }}
        onClick={showModal}
      />
      <div class="container"></div>
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
     {update? <p className="withValue">{context}</p> : <p className="withoutValue">Start edit {props.name}... </p>}
      </blockquote>
    </div>
  </div>
  <Modal
    title={props.name}
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    <TextArea rows={4} defaultValue={props.contextInput} type="text" onChange={saveText} >
    </TextArea>
  </Modal>
  </div>
</div>);
  }

