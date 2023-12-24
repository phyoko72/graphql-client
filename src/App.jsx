import "./App.css"
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import Home from "./pages/Home"

export const client = new ApolloClient({
    uri: "http://localhost:5000/",
    cache: new InMemoryCache(),
})

function App() {
    // client.query({query}).then((res) => console.log(res.data))
    return (
        <>
            <ApolloProvider client={client}>
                <Home />
            </ApolloProvider>
        </>
    )
}

export default App
