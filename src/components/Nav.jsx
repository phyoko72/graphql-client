import {useApolloClient} from "@apollo/client"
import {NavLink, useNavigate} from "react-router-dom"

export default function Nav() {
    const client = useApolloClient()
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        client.resetStore()
        navigate("/login")
    }
    return (
        <nav className="w-full mb-5 flex justify-between items-center [&>.active]:text-blue-700 [&>.active]:font-semibold [&>.active]:underline">
            <NavLink to={"/"}>Authors</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/add-book"}>Add Book</NavLink>
            <button onClick={handleLogout}>Log Out</button>
        </nav>
    )
}
