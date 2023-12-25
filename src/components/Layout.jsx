import {Outlet} from "react-router-dom"
import Nav from "./Nav"

export default function Layout() {
    return (
        <div className=" max-w-screen-xl m-auto p-7 flex justify-center items-center">
            <div className=" overflow-x-auto">
                <Nav />
                <Outlet />
            </div>
        </div>
    )
}
