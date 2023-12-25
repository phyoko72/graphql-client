import {useQuery} from "@apollo/client"
import {GET_AUTHORS} from "../lib/queries"
import SetBirthYear from "../components/SetBirthYear"

export default function Authors() {
    const {loading, error, data} = useQuery(GET_AUTHORS)
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>
    return (
        <>
            <table className=" table-auto w-[500px]">
                <thead>
                    <tr>
                        <th className=" border border-white border-spacing-2">
                            Name
                        </th>
                        <th className=" border border-white border-spacing-2">
                            Born
                        </th>
                        <th className=" border border-white border-spacing-2">
                            Books
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.allAuthors.map((author) => (
                        <tr key={author.name}>
                            <td className=" border border-white ">
                                {author.name}
                            </td>
                            <td className=" border border-white text-center ">
                                {author.born ?? "N/A"}
                            </td>
                            <td className=" border border-white text-center ">
                                {author.books}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <SetBirthYear authors={data.allAuthors} />
        </>
    )
}
