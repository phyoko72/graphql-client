import {useMutation} from "@apollo/client"
import {useRef, useState} from "react"
import {ADD_BOOK, GET_AUTHORS, GET_BOOKS} from "../lib/queries"

export default function AddBook() {
    const genresRef = useRef()
    const formRef = useRef()

    const [genresArr, setGenresArr] = useState([])
    const [genresErr, setGenresErr] = useState(null)

    console.count("AddBook rendered")

    const [addBook, {loading, error, data}] = useMutation(ADD_BOOK)

    const handleGenresArr = () => {
        let value = genresRef.current.value.trim()
        if (value) {
            setGenresArr((prev) => [...prev, value])
            genresRef.current.value = ""
            genresRef.current.focus()
            setGenresErr(null)
        }
    }

    const handleSubmit = (e) => {
        setGenresErr(null)
        e.preventDefault()
        if (genresRef.current.value.trim() < 1 && genresArr.length < 1) {
            setGenresErr("Genres field is required!")
            return
        }
        if (genresArr.length < 1) {
            setGenresErr("Click add genres button")
            return
        }
        const title = e.target.title.value
        const author = e.target.author.value
        const published = e.target.published.valueAsNumber
        console.log("Form: ", {title, author, published, genresArr})
        addBook({
            variables: {book: {title, author, published, genres: genresArr}},
            refetchQueries: [{query: GET_AUTHORS}, {query: GET_BOOKS}],
            onError: (err) => {
                console.log("Mutation err: ", err)
            },
        })
        formRef.current.reset()
        setGenresArr([])
    }
    return (
        <>
            <h1 className=" mb-2 underline underline-offset-2">
                Add Book Form
            </h1>
            <form onSubmit={handleSubmit} className=" w-[500px]" ref={formRef}>
                <div className=" mb-5">
                    <input
                        className=" p-1 rounded w-full"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter Title"
                        required
                    />
                </div>
                <div className=" mb-5">
                    <input
                        className=" p-1 rounded w-full"
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Enter Author"
                        required
                    />
                </div>
                <div className=" mb-5">
                    <input
                        className=" p-1 rounded w-full"
                        type="number"
                        name="published"
                        id="published"
                        placeholder="Enter Published"
                        required
                    />
                </div>
                <div className=" mb-5">
                    {genresErr && <p>{genresErr}</p>}
                    <input
                        className=" p-1 rounded w-full"
                        type="text"
                        name="genres"
                        id="genres"
                        placeholder="Enter Genres"
                        ref={genresRef}
                    />
                    <button
                        type="button"
                        className=" text-sm bg-blue-700"
                        onClick={handleGenresArr}
                    >
                        Add Genres
                    </button>
                    {genresArr.length > 0 && (
                        <p>{genresArr.map((genres) => genres).join(", ")}</p>
                    )}
                </div>
                <button className="btn w-full">Add Book</button>
            </form>
        </>
    )
}
