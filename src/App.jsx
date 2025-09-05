/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Card1 from './components/Card1.jsx'
import Card2 from './components/Card2.jsx'
import Card3 from './components/Card3.jsx'
import About from './components/About.jsx'
import Nav from './components/Nav.jsx'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <Nav />
      <div className="section">
        <About />
      </div>
      <div className="row">
        <div className="column">
          <Card1 />
        </div>
        <div className="column">
          <Card2 />
        </div>
        <div className="column">
          <Card3 />
        </div>
      </div>
    </>
  )
}

export default App
