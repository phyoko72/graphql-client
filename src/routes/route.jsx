import {createBrowserRouter} from "react-router-dom"
import Authors from "../pages/Authors"
import Books from "../pages/Books"
import AddBook from "../pages/AddBook"
import Layout from "../components/Layout"
import Login from "../pages/Login"
import PrivateRoutes from "./PrivateRoutes"
import Persons from "../pages/Persons"

const router = createBrowserRouter([
    {
        // path: "/",
        // element: <Layout />,
        children: [{path: "/login", element: <Login />}],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {index: true, element: <Persons />},
            {path: "/books", element: <Books />},
            {path: "/add-book", element: <AddBook />},
        ],
    },
])

export default router
