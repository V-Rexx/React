import { useState } from "react";

function generateGameBoard(){
    console.log("MAKING THE INITIAL GAMEBOARD");
    return Array(5000);
}
export default function Dumbo() {
    // const [state, setState] = useState(generateGameBoard()); //The useState should ignore the function called 
    //but in this case the function is called everytime it re renders, but the state will be changed to hello.
    const [state, setState] = useState(generateGameBoard);

    return <button onClick={() => setState("HELLO")}>CLick to change state</button>
}

//If we are not setting a new value the react doesn't re render.