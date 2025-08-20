import { useEffect, useState} from "react";
const API_KEY = "J3xQJJuHGpqwQF5PaI2EkA==hgjRHE6c0zUx2fwR";
const RANDOM_QUOTES_URL = "https://api.api-ninjas.com/v1/quotes";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({})
    const [loader, setLoader] = useState(true);

    // useEffect(() => {
       
    //     async function getInitialQuote() {
    //         const response = await fetch(RANDOM_QUOTES_URL, {
    //             headers: {
    //                 "X-Api-Key" : API_KEY,
    //             }
    //         });
    //         const jsonResponse = await response.json();
    //         const randomQuote = jsonResponse[0];
    //         console.log(randomQuote);
    //         setQuote(randomQuote);
    //     }
    //     getInitialQuote();

    // }, []);

    useEffect(() => {
       
        fetchQuote();

    }, []);

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTES_URL, {
            headers: {
                "X-Api-Key" : API_KEY,
            }
        });
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse[0];
        console.log(randomQuote);
        setQuote(randomQuote);
        setLoader();
    }

    return(
        <div>
            <p className="Loader" style={{opacity: loader ? 1 : 0 }}>Loading...</p>
            <h1>{quote.quote}</h1>
            <h3>{quote.author}</h3>
            

        </div>
    );
}   