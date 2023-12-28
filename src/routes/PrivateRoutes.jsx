import {Navigate, Outlet} from "react-router-dom"
import Nav from "../components/Nav"
import Layout from "../components/Layout"

export default function PrivateRoutes() {
    const user = JSON.parse(localStorage.getItem("user-token"))

    if (!user) return <Navigate to={"/login"} />
    return (
        <>
            <Layout>
                <Nav />
                <Outlet />
            </Layout>
        </>
    )
}
