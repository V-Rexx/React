import { use, useState } from "react";
import { v4 as uuid } from "uuid";

export default function ScoreKeeper({numPlayers, target}) {
    const [score, setScore] = useState(new Array(numPlayers).fill(0));
    // const incrementScore = (idx) => {
    //     setScore(prevScores => {
    //         const copy = [...prevScores];
    //         copy[idx] += 1 ;
    //         return copy
    //     });
    // };

    const incrementScore = (idx) => {
        setScore(prevScores => {
            return prevScores.map((score, i) => {
                if( i === idx) return score + 1;
                return score;
            })
        })
    }

    const reset = () => {
       setScore(new Array(numPlayers).fill(0));
    }

    return (
        <div>   
            <h1>Score Keeper</h1>
            <ul style={{textDecoration: "none"}}>
                {score.map((score, idx) => {
                    return <li key={idx}>Player {idx + 1}: {score} 
                        <button onClick={() => incrementScore(idx)}>+1</button>
                        {score >= target && "WINNER!"}
                    </li>
                })}
            </ul>
            <button onClick={reset}>RESET</button>
        </div>
    );
}