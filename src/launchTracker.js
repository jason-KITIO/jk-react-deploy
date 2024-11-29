import { useState, useEffect } from "react";

const API = "https://api.spacexdata.com/v4/launches"

function LaunchTracker() {

    const [launches, setLaunches] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(API)
            .then((reponse) => {
                if (!reponse.ok) {
                    throw new error('error')
                }
                return reponse.json()
            })
            .then((data) => {
                setLaunches(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h1>Space X launch tracker</h1>
            {loading && <p>loading ...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul>
                {launches.map((launch) => (
                    <li key={launch.id}>
                        <p> {launch.name} </p>
                        <p> {launch.details ? launch.details : 'empty'} </p>
                        <a href={launch.links.webcast} target="_blank" rel="noopener noreferrer" >
                            watch lauch
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LaunchTracker