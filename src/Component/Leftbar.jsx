import React, { useContext } from 'react';
import { dataContext } from '../Context/UserContext';
import { FaBars } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

function Leftbar(props) {
    let {previous,setAnswer,setReceive,setResult}=useContext(dataContext)

   function handler(id){
    setResult(true)
    let data=previous.find(item=>item.id==id);
console.log("int",data.int);
console.log("out",data.out);


    
    
    setAnswer(data.int);
    setReceive(data.out);
    


   }
    
    return (
        <div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"2rem",fontSize:"1.2rem",
         
        }}>
            <h3><FaBars /></h3>
           <p style={{border:"none" ,
           backgroundColor:"aliceblue",
           color:"black",
            marginBottom:"8px",
            borderRadius:"15px",
            padding:"0.5rem"}} onClick={()=>setResult(false)}><FaPlusCircle />&nbsp;New Chat</p>
           {
            previous.map(item=>(
                  <div style={{fontSize:"1.3rem",cursor:"pointer"}} onClick={()=>handler(item.id)} ><FaRegMessage />&nbsp;{item.int?.slice(0,10)}..</div>
            ))
         
            
    }
    </div>


        </div>
    );
}

export default Leftbar;