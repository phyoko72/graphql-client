import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink,
    split,
} from "@apollo/client"
import {GraphQLWsLink} from "@apollo/client/link/subscriptions"
import {createClient} from "graphql-ws"
import {RouterProvider} from "react-router-dom"
import {setContext} from "@apollo/client/link/context"
import router from "./routes/route"
import {getMainDefinition} from "@apollo/client/utilities"

const authLink = setContext((_, {headers}) => {
    const token = JSON.parse(localStorage.getItem("user-token"))
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

const wsLink = new GraphQLWsLink(
    createClient({
        url: "ws://localhost:4000",
    })
)

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        )
    },
    wsLink,
    authLink.concat(httpLink)
)

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
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
