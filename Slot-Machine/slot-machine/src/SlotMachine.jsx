export default function SlotMachine({val1, val2, val3}) {

    const isWinner = val1 === val2 && val1 === val3;

    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{color: isWinner ? "green" : "red"}}>{isWinner ? "YOU WIN" : "YOU LOSE"}</h2>
            {isWinner && <h3>Congrats</h3>}
        </div>
    );
}