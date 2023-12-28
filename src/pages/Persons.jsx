import {useQuery} from "@apollo/client"
import {ALL_PERSONS} from "../lib/queries"
import AddPerson from "../components/AddPerson"

export default function Persons() {
    const {loading, error, data} = useQuery(ALL_PERSONS)
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>
    console.log(data)
    return (
        <>
            <h1>All Persons</h1>
            <table className=" table-auto w-[500px]">
                <thead>
                    <tr>
                        <th className=" border border-white border-spacing-2">
                            Name
                        </th>
                        <th className=" border border-white border-spacing-2">
                            Phone
                        </th>
                        <th className=" border border-white border-spacing-2">
                            City
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.allPersons.map((person) => (
                        <tr key={person.name}>
                            <td className=" border border-white ">
                                {person.name}
                            </td>
                            <td className=" border border-white text-center ">
                                {person.phone ?? "N/A"}
                            </td>
                            <td className=" border border-white text-center ">
                                {person.city}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <AddPerson />
        </>
    )
}
