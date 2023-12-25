import {useMutation} from "@apollo/client"
import {useState} from "react"
import {SET_BIRTH_YEAR} from "../lib/queries"

export default function SetBirthYear({authors}) {
    const [selectedAuthor, setSelectedAuthor] = useState("")
    const [birthYear, setBirthYear] = useState("")

    const [setYear] = useMutation(SET_BIRTH_YEAR)

    const handleChange = (e) => {
        console.log(e.target.value)
        setSelectedAuthor(e.target.value)
        const author = authors.find((author) => author.name === e.target.value)
        if (author.born) {
            setBirthYear(author.born)
        } else {
            setBirthYear("")
        }
    }
    const handleInput = (e) => {
        setBirthYear(e.target.valueAsNumber)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({selectedAuthor, birthYear})
        setYear({variables: {name: selectedAuthor, year: birthYear}})
        e.target.reset()
        setBirthYear("")
    }
    return (
        <div className=" w-[300px] m-auto">
            <h2 className=" my-3 text-lg font-semibold underline underline-offset-4">
                Set Birth Year
            </h2>

            <form
                onSubmit={handleSubmit}
                className="*:p-1 *:rounded *:mb-3 *:w-full "
            >
                <select defaultValue={""} onChange={handleChange} required>
                    <option value={""} disabled>
                        Select Author
                    </option>
                    {authors.map((author) => (
                        <option key={author.name} value={author.name}>
                            {author.name}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    name=""
                    placeholder="Enter Birth Year of Author"
                    value={birthYear}
                    onChange={handleInput}
                    required
                />

                <button
                    className=" btn disabled:opacity-75"
                    disabled={!selectedAuthor && !birthYear}
                >
                    Update Birth Year
                </button>
            </form>
        </div>
    )
}
