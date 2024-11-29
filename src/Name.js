function Name() {
    const Names = ['Name1', 'Name2', 'Name3']

    return (
        <div>
            <ul>
                {
                    Names.map(item => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Name;