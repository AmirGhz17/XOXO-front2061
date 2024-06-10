import { useState } from 'react'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
      
      
      <Link to={'/signupForm'} style={{backgroundColor : "orange",margin : "20px",padding:"10px 20px 10px 20px",textDecoration: 'none', borderRadius: '20px'}}>Local 2 player</Link>
    
      <Link to= {'/topScores'} style={{backgroundColor : "orange",textDecoration: 'none',padding:"10px 20px 10px 20px", borderRadius: '20px'}}>SCORES</Link>
    </div>
  )
}

export default App
