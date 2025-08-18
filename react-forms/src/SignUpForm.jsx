import { use, useState } from "react"


export default function SignUpForm(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const updateFirstname = (evt) => {
        setFirstname(evt.target.value);
    }

    const updateLasttname = (evt) => {
        setLastname(evt.target.value);
    }

    const handleClick = () => {
        console.log(firstname, lastname);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name: </label>
            <input type="text"
            placeholder="First Name"
            value={firstname}
            onChange={updateFirstname}
            id="firstname"
            />

            <label htmlFor="lastname">Last Name: </label>
            <input type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={updateLasttname}
            id="lastname"
            />
            
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    );
}