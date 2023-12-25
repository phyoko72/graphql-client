import {createBrowserRouter} from "react-router-dom"
import Authors from "../pages/Authors"
import Books from "../pages/Books"
import AddBook from "../pages/AddBook"
import Layout from "../components/Layout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Authors />},
            {path: "/books", element: <Books />},
            {path: "/add-book", element: <AddBook />},
        ],
    },
])

export default router
