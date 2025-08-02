import { useState } from "react";
import "./Toggler.css"

export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count+1);

    const toggleIsHappy = () => setIsHappy(!isHappy);

    return (
        <div>
             <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? "😁" : "😞"}</p>
             <button onClick={handleClick}>Counter: {count}</button>
        </div>
       
    )

}