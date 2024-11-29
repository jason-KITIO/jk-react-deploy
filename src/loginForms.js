import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <div>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={() => alert("welcome " + username)}
            >Login</button>
        </div>
    )
}

export default LoginForm