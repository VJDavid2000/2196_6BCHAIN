import { useState } from 'react'
import './App.css' 
import TapButton from './components/Conditional-Demo1'
import FamilyOrYourself from './components/Conditional-Demo2'
import FamilyOrFriends from './components/Conditional-Demo3'
import FamilyOrBeliefs from './components/Conditional-Demo4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Conditional-Demo1</h2>
      <TapButton />
      <h2>Conditional-Demo2</h2>
      <FamilyOrYourself />
      <h2>Conditional-Demo3</h2>
      <FamilyOrFriends />
      <h2>Conditional-Demo4</h2>
      <FamilyOrBeliefs />
    </>
  )
}

export default App
