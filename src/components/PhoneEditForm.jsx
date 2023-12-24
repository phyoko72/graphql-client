import {useMutation} from "@apollo/client"
import {EDIT_PHONE, GET_PERSONS} from "../lib/queries"

export default function PhoneEditForm({handleErr}) {
    const [addUser] = useMutation(EDIT_PHONE, {
        // refetchQueries: [{query: GET_PERSONS}],
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
        const phone = e.target.phone.value
        addUser({variables: {name, phone}})
    }
    return (
        <>
            <h2>Edit Phone</h2>
            <form onSubmit={handleSubmit}>
                <div className=" mb-3">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        className=" p-1 rounded"
                    />
                </div>

                <div className=" mb-3">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter phone"
                        className=" p-1 rounded"
                    />
                </div>

                <button>Edit</button>
            </form>
        </>
    )
}
