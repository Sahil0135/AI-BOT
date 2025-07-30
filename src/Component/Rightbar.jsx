
import React, { useContext } from 'react';
import { dataContext } from '../Context/UserContext';
import { FaUserSecret } from "react-icons/fa6";
import '../CSS/RightBar.css'

function Rightbar() {
    const {
        sent, loading, setInput, input,
        result, recive, ans
    } = useContext(dataContext);

    return (
        <div style={{display:"flex",flexDirection:"column",height:"100vh",
        width:'100%',gap:"2rem",
        justifyContent:"space-around",alignItems:"center"}}>
            {!result ? (
                <div style={{height:"60%",width:"100%",
                    display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center",fontSize:"1.5rem", justifyContent:"center"
                }}  >
                    <h1 className="gemini-text">Hello Sahil</h1>
                    <h2 className="gemini-text">I am your own Assistant</h2>
                    <p className="gemini-text">What would you like to ask?</p>
                </div>
                
            ) : (
                // 
                <div style={{display:"flex",flexDirection:"column",width:"60%"}} >
                        <div  className="response-answer"  ><FaUserSecret  /> {ans}</div>
                        {!loading ? (
                            <div  className="response-bot center" >
                                <img  src="https://cdn-icons-png.flaticon.com/128/630/630426.png" loading="lazy" alt="Robot " title="Robot " width="44px" height="44px"></img> {recive}</div>
                        ) : (
                            <p style={{border:"2px solid green",margin:"0 auto"}} className='loader center'> </p>
                        )}
                </div>
            )}
     


            <div style={{height:"40%",width:"100%",display:"flex",
                alignItems:"center",justifyContent:"center",
            }}  >
                <textarea
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    
                />
                <button onClick={() => sent(input)}>Send</button>
            </div>
        </div>
    );
}

export default Rightbar;














