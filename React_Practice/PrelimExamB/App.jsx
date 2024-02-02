import { useState } from 'react'
import './App.css'
import PrelimB from './components/PrelimExam-B'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Things To Bring</h2>
      <PrelimB />
    </>
  )
}

export default App
