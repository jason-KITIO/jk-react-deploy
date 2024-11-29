function myForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulaire soumis');
    }

    const handleChange = (event) => {
        console.log(event.target.value);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button type="submit">Send</button>
        </form>
    )
}

export default myForm