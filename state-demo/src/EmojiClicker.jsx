import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji() {
    const choices = ["😁", "🍌", "🍑", "😘", "🤬" , "🫦", "👄"];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function () {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => {
            return [...oldEmojis, {id: uuid(), emoji: randomEmoji()}];
        })
    }

    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter(e => e.id != id);
        })
    }

    const makeAllHearts = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map((e) => {
                return {...e, emoji: "❤️"};
            })
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeAllHearts}>Make all Hearts</button>
        </div>
    );
}