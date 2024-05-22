import React,{useState} from 'react'
import "../App.css"
import { FcCollapse,FcExpand } from "react-icons/fc";
const Data = ({title,body}) => {

    const [show,setShow]=useState(false);

    const handleClick = ()=>{
        setShow(!show);
    }
  return (
    <div className={show ? 'accordion-opened accordion-item' : 'accordion-item'} onClick={handleClick} >
       <div className='accordion-title'>
       <h5>{title}</h5>
       <p>
        {show ? <FcExpand/> : <FcCollapse/>}
       </p>
       </div>
        {show && <p>{body}</p>}
    </div>
  )
}

export default Data