import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client"
import {RouterProvider} from "react-router-dom"
import {setContext} from "@apollo/client/link/context"
import router from "./routes/route"

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem("user-token")
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null,
        },
    }
})

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_SERVER,
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
})

function App() {
    // client.query({query}).then((res) => console.log(res.data))
    return (
        <>
            <ApolloProvider client={client}>
                <RouterProvider router={router} />
            </ApolloProvider>
        </>
    )
}

export default App
