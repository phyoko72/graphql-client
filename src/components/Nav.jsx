import {NavLink} from "react-router-dom"

export default function Nav() {
    return (
        <nav className="w-full mb-5 flex justify-between items-center [&>.active]:text-blue-700 [&>.active]:font-semibold [&>.active]:underline">
            <NavLink to={"/"}>Authors</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/add-book"}>Add Book</NavLink>
        </nav>
    )
}
