import { use, useState } from "react"


export default function SignUpForm(){
    
    const[handleForm, setHandleForm] = useState({firstName: "", lastName: "", password:""});

    const updateForm = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;

        setHandleForm((currData) => {
            return {
                ...currData,
                [changedField] : newValue,
            };
        });
    };

    const handleClick = () => {
        console.log(firstname, lastname);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name: </label>
            <input type="text"
            placeholder="First Name"
            value={handleForm.firstName}
            onChange={updateForm}
            name="firstName"
            id="firstname"
            />

            <label htmlFor="lastname">Last Name: </label>
            <input type="text"
            placeholder="Last Name"
            value={handleForm.lastName}
            onChange={updateForm}
            name="lastName"
            id="lastname"
            />

            <label htmlFor="password">Password: </label>
            <input type="password"
            placeholder="Last Name"
            value={handleForm.password}
            onChange={updateForm}
            name="password"
            id="password"
            />
            
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    );
}