export default function Layout({children}) {
    return (
        <div className=" max-w-screen-xl m-auto p-7 flex justify-center items-center">
            <div className=" overflow-x-auto w-[500px]">{children}</div>
        </div>
    )
}
