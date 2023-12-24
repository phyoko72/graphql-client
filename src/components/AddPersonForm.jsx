import {useMutation} from "@apollo/client"
import {ADD_PERSON, GET_PERSONS} from "../lib/queries"

export default function AddPersonForm({handleErr}) {
    const [addUser] = useMutation(ADD_PERSON, {
        refetchQueries: [{query: GET_PERSONS}],
        onError: (error) => {
            const errMsg = error.graphQLErrors.map((e) => e.message).join("\n")
            console.log("Mutation Err: ", errMsg)
            handleErr(errMsg)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        const name = e.target.name.value
        const city = e.target.city.value
        const street = e.target.street.value
        const phone = e.target.phone.value

        const data = phone ? {name, city, street, phone} : {name, city, street}
        addUser({variables: {person: data}})
    }
    return (
        <>
            <h3>Create New</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                />
                <br />
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                />
                <br />
                <input
                    type="text"
                    name="street"
                    id="street"
                    placeholder="Enter street"
                />
                <br />
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                />
                <br />
                <button>Add</button>
            </form>
        </>
    )
}
