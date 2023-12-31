import {useMutation} from "@apollo/client"
import {LOGIN_USER} from "../lib/queries"
import {useEffect, useRef} from "react"
import {useNavigate} from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [login, result] = useMutation(LOGIN_USER, {
        onError: (err) => {
            console.log("login err: ", err)
        },
    })
    console.log("outside result: ", result)
    useEffect(() => {
        console.log("inside result: ", result.data?.loginUser.value)
        if (result.data) {
            localStorage.setItem(
                "user-token",
                JSON.stringify(result.data.loginUser.value)
            )
            navigate("/")
        }
    }, [result.data])
    const formRef = useRef()
    const handleLogin = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        login({variables: {username, password}})

        // formRef.current.reset()
    }
    return (
        <>
            <h1>Login</h1>
            <form ref={formRef} onSubmit={handleLogin}>
                <div>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Username"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                    />
                </div>
                <button>Login</button>
            </form>
        </>
    )
}
