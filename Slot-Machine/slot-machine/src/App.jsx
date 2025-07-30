import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlotMachine from './SlotMachine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SlotMachine val1="🍌" val2="🍌" val3="🍌"/>
      <SlotMachine val1="🍑" val2="🍑" val3="🎶"/>
    </>
  )
}

export default App
