import { useState } from 'react'
import './App.css'
import Lucky7 from './Lucky7'
import Dice from './Dice'
import {sum} from './utils'

function rollLessThan4 (dice) {
  return sum(dice) < 4;
}

function rollSame (dice) {
  return dice.every((v) => v === dice[0]);
}


function App() {
  
  return (
    <>
      <Lucky7 title='Less than 4' winCheck={rollLessThan4}/>
      <Lucky7 title='Roll Same' winCheck={rollSame}/>
      
    </>
  )
}

export default App;
