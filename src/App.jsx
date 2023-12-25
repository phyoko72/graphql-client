import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import {RouterProvider} from "react-router-dom"
import router from "./lib/route"

export const client = new ApolloClient({
    uri: import.meta.env.VITE_SERVER,
    cache: new InMemoryCache(),
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
