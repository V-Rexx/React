import { useState } from "react";

export default function ScoreKeeper() {
    const [score, setScore] = useState({p1Score: 0, p2Score: 0});
    function increaseP1Score(){
        setScore((oldScores) => {
            return {...oldScores, p1Score: oldScores.p1Score + 1};//new object the copy of old object
        });
    }

    function increaseP2Score(){
        setScore((oldScores) => {
            return {...oldScores, p2Score: oldScores.p2Score + 1};
        });
    }
    return (
        <div>
            <p>Player 1: {score.p1Score}</p>
            <p>Player 2: {score.p2Score}</p>

            <button onClick={increaseP1Score}> +1 Player 1</button>
            <button onClick={increaseP2Score}> +1 Player 2</button>
        </div>
    );
}