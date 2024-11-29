import { useContext } from "react";
import { userContext } from "./userContext";

function ChildContainer() {
    const user = useContext(userContext)

    return (
        <div>
            <p>ChildContainer</p>
            <p>Name : {user.name} </p>
            <p>Age : {user.age} </p>
        </div>
    );
}

export default ChildContainer