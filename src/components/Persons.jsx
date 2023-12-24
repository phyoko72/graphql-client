const Persons = function ({persons, handle}) {
    console.count("Persons rendered")
    return (
        <div>
            <h2>Persons</h2>
            {persons.map((p, index) => (
                <div key={index}>
                    {p.name} {p.phone}
                    <button onClick={() => handle(p.name)}>Show Address</button>
                </div>
            ))}
        </div>
    )
}

export default Persons
