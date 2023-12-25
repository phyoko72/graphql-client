import {useQuery, gql} from "@apollo/client"
import Persons from "../components/Persons"
import {useState} from "react"
import Person from "../components/Person"
import AddPersonForm from "../components/AddPersonForm"
import {GET_PERSONS} from "../lib/queries"
import PhoneEditForm from "../components/PhoneEditForm"

const query = gql`
    query Find_Person($name: String!) {
        person(name: $name) {
            name
            phone
            address {
                city
                street
            }
        }
    }
`

export default function Home() {
    const [name, setName] = useState(null)
    const {loading, data, error} = useQuery(GET_PERSONS)
    const [errorMessage, setErrorMessage] = useState(null)
    const handleErr = (msg) => {
        setErrorMessage(msg)
        setTimeout(() => {
            setErrorMessage(null)
        }, 10000)
    }

    const result = useQuery(query, {
        variables: {name},
        skip: !name,
    })

    console.log({result})

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>

    const handleName = (n) => setName(n)
    const onClose = () => setName(null)

    return (
        <>
            <h1>Home</h1>

            {result?.data && name && (
                <Person person={result.data.person} onClose={onClose} />
            )}

            <Persons persons={data.allPersons} handle={handleName} />

            {errorMessage && <h2 className=" text-red-700">{errorMessage}</h2>}
            <AddPersonForm handleErr={handleErr} />
            <PhoneEditForm handleErr={handleErr} />
        </>
    )
}
