import React, { useState,useRef, useCallback } from "react";
import "./_infoblock.scss";
import { EditOutlined} from "@ant-design/icons";
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
  const valueRef= useRef(context);
  
//   const[yesNoContext,setContext]=useState(context)

//   const [update, setUpdate] = useState(true);
//  const prevContext= PreviousText(context)
 
// const updateFalse=()=>{
//     return(<p>{context}</p>,setUpdate(false))
// }

//   const saveText = (valueInput) => {
//     setContext(valueInput.target.value);
//     setUpdate(false);
//   };



  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const ContextSet=(newText)=>{
      setContext(newText)
  }
  const handleOk = () => {
   let newtext= document.getElementById (`${props.name}`).value;
   console.log(newtext);
    // e.preventDefault();
    // setContext(`${valueRef.current.value}`); 
   ContextSet(newtext);
    // const putContext=valueRef.current.getContext();
    // setContext(putContext);
    // console.log(`${valueRef.current.value}`)
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
    <div class="card-header" style={{fontSize:"20px"}}>
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
     {context }
      </blockquote>
    </div>
  </div>
  <Modal
    title={props.name}
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    <TextArea rows={4} defaultValue={props.contextInput} type="text" id={props.name} inputRef={valueRef} >
    </TextArea>
  </Modal>
  </div>
</div>);
  }

