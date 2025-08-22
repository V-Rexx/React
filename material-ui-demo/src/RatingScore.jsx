import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingScore(){

    const [score, setScore] = useState(3);
  
    return(
        <div>
            <h1>Rating. Rating Score: {score}</h1>
        <Rating
            name="simple-controlled"
            value={score}
            onChange={(event, newValue) => {
                setScore(newValue);
            }}
        />
        </div>
    );
}