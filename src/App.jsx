
import './App.css'
import Leftbar from './Component/Leftbar'
import Rightbar from './Component/Rightbar'

function App() {



  return (
    <div className='gemini-background' style={{width:"100%",display:"flex",height:"100vh",justifyContent:"center"}}>
      <div style={{width:"20%",borderRight:"4px solid grey"}} ><Leftbar></Leftbar></div>
      <div style={{width:"80%",overflow:"auto"}}><Rightbar></Rightbar></div>
    </div>
  )
}

export default App
