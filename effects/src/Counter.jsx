import { useState, useEffect } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState("");
    const increment = () => {
        setCount((c) => c+1);
    }

    const updateForm = (e) => {
        setFormData(e.target.value);
    }

    useEffect(function myEffect () {
        console.log("MY Effect was called");
    },
    []
    );


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name:{formData}</p>
            <input onChange={updateForm} value={formData} type="text" />
        </div>
    );
}