import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Portfolio from './Portfolio'
import Background from './Background.jsx'
import Projects from './projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App
