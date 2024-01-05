import { useState } from 'react'
import './App.css' 
import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello />
      <Welcome />
    </>
  )
}

export default App
