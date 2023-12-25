import {useQuery} from "@apollo/client"
import {GET_BOOKS} from "../lib/queries"

export default function Books() {
    const {loading, error, data} = useQuery(GET_BOOKS)
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>
    console.log(data)
    return (
        <>
            <table className=" table-auto w-[500px]">
                <thead>
                    <tr>
                        <th className=" border border-white border-spacing-2">
                            Title
                        </th>
                        <th className=" border border-white border-spacing-2">
                            Author
                        </th>
                        <th className=" border border-white border-spacing-2">
                            Published
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.allBooks.map((book) => (
                        <tr key={book.title}>
                            <td className=" border border-white ">
                                {book.title}
                            </td>
                            <td className=" border border-white text-center ">
                                {book.author}
                            </td>
                            <td className=" border border-white text-center ">
                                {book.published}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
