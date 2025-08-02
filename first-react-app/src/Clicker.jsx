

// function handleHover(){
//     console.log("HOVERED!!!")
// }


export default function Clicker({message, buttonText}){
    return (
        <div>
            <button onClick={() => alert(message)}>{buttonText}</button>
        </div>
    )
}
