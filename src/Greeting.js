function Greeting(props) {
    const isLogging = true

    return (
        <div>
            {isLogging ? <h1>Welcome {props.username}</h1> : 'Pleace login'}
        </div>
    )
}

export default Greeting