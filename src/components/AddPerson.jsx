import {useMutation} from "@apollo/client"
import {ADD_PERSON, ALL_PERSONS} from "../lib/queries"
import {updateCache} from "../lib/cache"

export default function AddPerson() {
    console.count("AddBook rendered")

    const [addPerson, {loading, error, data}] = useMutation(ADD_PERSON, {
        onError: (err) => {
            console.log("addPerson err: ", err)
        },
        update: (cache, response) => {
            updateCache(cache, {query: ALL_PERSONS}, response.data.addPerson)
        },
    })
    // update: (cache, response) => {
    //     console.log({cache, response})
    //     cache.updateQuery({query: ALL_PERSONS}, ({allPersons}) => {
    //         return {
    //             allPersons: allPersons.concat(response.data.addPerson),
    //         }
    //     })
    // },

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const phone = e.target.phone.value
        const street = e.target.street.value
        const city = e.target.city.value

        addPerson({
            variables: {
                person: {
                    name,
                    phone: phone.length > 0 ? phone : undefined,
                    street,
                    city,
                },
            },
            onError: (err) => {
                console.log("Mutation err: ", err)
            },
        })
    }
    return (
        <>
            <h1 className=" mb-2 underline underline-offset-2">
                Add Person Form
            </h1>
            <form onSubmit={handleSubmit} className=" w-[500px]">
                <div className=" mb-5">
                    <input
                        className=" p-1 rounded w-full"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        required
                    />
                </div>
                <div className=" mb-5">
                    <input
                        className=" p-1 rounded w-full"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter Phone"
                    />
                </div>
                <div className=" mb-5">
                    <input
                        className=" p-1 rounded w-full"
                        type="text"
                        name="street"
                        id="street"
                        placeholder="Enter Street"
                        required
                    />
                </div>
                <div className=" mb-5">
                    <input
                        className=" p-1 rounded w-full"
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter City"
                        required
                    />
                </div>

                <button className="btn w-full">Add Person</button>
            </form>
        </>
    )
}
