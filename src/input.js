import { useRef, useEffect } from "react"

function Input() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <input type="text" ref={inputRef} />
    )
}
export default Input
