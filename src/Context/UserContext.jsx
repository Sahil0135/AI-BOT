import React, { createContext, useContext, useState } from 'react';
import runGemini from '../gemni';
export const dataContext=createContext()

function UserContext({children}) {
    async function sent(prompt) {
        setResult(true);
        setAnswer(prompt);
        setInput("");
        setLoading(true);

        // setPrevious(prev=>[...prev,input]);
        console.log("pre",previous);
        

     let data=    await runGemini(prompt);
     setReceive(data);
     setPrevious(prev=>[...prev,{id:Date.now(),int:prompt,out:data}]);

  console.log("Previous after:", { int: prompt, out: data });
  
     setLoading(false);
     
        
    }
    let [input,setInput]=useState("");
    let [result,setResult]=useState(false)
    let [ans,setAnswer]=useState("");
    let [loading,setLoading]=useState(false);
    let [recive,setReceive]=useState("");
    let [previous,setPrevious]=useState([])
    
    

    let data={
       
        sent,
        input,
        setInput,
        loading,
        recive,
        setAnswer,
        setReceive,
        result,
        setResult,
        ans,
        loading,previous,setPrevious
    }
    return (
        <div>
            <dataContext.Provider value={data}>
            {children}
            </dataContext.Provider>
        </div>
    );
}

export default UserContext