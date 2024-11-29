import { useState } from "react";

function Increment() {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);
    };

    return (
        <div>
            <p> count : {count} </p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Increment