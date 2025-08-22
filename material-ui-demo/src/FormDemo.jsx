import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useState } from 'react';



export default function FormDemo(){
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(30);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const handleChange = (e, newVal) => {
        setVolume(newVal);
    }

    return(
        <Box sx={{border: '1px solid grey', p : 20}}>
            <h1>Name is: {name}</h1>
            <TextField 
            id="outlined-basic" 
            label="Puppy Name" 
            placeholder='Fido'
            value={name}
            variant="outlined" 
            onChange={updateName}
            />

            <h2>Volume: {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={handleChange} />

        </Box>
        
    );
}