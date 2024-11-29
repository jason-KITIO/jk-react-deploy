import { useState, useEffect } from "react";

function UserDetails() {

    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controleur = new AbortController()
        const signal = controleur.signal
        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal })
                .then((reponse) => {
                    if (!reponse.ok) {
                        throw new Error('user not found')
                    }
                    return reponse.json();
                })
                .then((data) => {
                    setUser(data)
                    setError(null)
                })
                .catch((error) => {
                    setUser(null)
                    setError(error.message)
                })
        }

        return () => {
            controleur.abort();
        }
    }, [userId])

    return (
        <div>
            <h2>User Details</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="enter user ID"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user &&
                <ul>
                    <li>Name : {user.name} </li>
                    <li>email : {user.email} </li>
                </ul>
            }
        </div>
    );
}

export default UserDetails