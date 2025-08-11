import './Lucky7.css'
import { useState } from 'react';
import {getRolls} from "./utils";
import Dice from './Dice';

export default function Lucky7({numDice=2, goal=7}) {
    const [dice, setDice] = useState(getRolls(numDice));
    return(
        <main>
            <h1>Lucky {goal}</h1>
            <Dice dice={dice}/>
        </main>
    );
}