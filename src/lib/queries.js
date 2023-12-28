import {gql} from "@apollo/client"

const PERSON_DETAILS = gql`
    fragment PersonDetails on Person {
        city
        street
        phone
        name
        id
    }
`

export const PERSON_ADDED = gql`
    subscription {
        personAdded {
            ...PersonDetails
        }
    }
    ${PERSON_DETAILS}
`

export const ALL_PERSONS = gql`
    query ALL_PERSONS($phone: HasPhone) {
        allPersons(phone: $phone) {
            ...PersonDetails
        }
    }
    ${PERSON_DETAILS}
`

export const ADD_PERSON = gql`
    mutation ADD_PERSON($person: AddPerson!) {
        addPerson(person: $person) {
            ...PersonDetails
        }
    }
    ${PERSON_DETAILS}
`

export const LOGIN_USER = gql`
    mutation LOGIN_USER($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            value
        }
    }
`

export const GET_AUTHORS = gql`
    query GET_AUTHORS {
        allAuthors {
            name
            born
            id
            books
        }
    }
`

export const GET_BOOKS = gql`
    query GET_BOOKS {
        allBooks {
            author
            published
            title
            id
        }
    }
`

export const ADD_BOOK = gql`
    mutation ADD_BOOK($book: NewBook!) {
        addBook(book: $book) {
            published
            genres
            author
            title
            id
        }
    }
`
export const SET_BIRTH_YEAR = gql`
    mutation SET_BIRTH_YEAR($name: String!, $year: Int!) {
        setBirthYear(name: $name, year: $year) {
            name
            born
            id
        }
    }
`
// export const ADD_PERSON = gql`
//     mutation ADD_PERSON($person: NewPerson!) {
//         addPerson(person: $person) {
//             name
//             address {
//                 city
//                 street
//             }
//         }
//     }
// `

export const EDIT_PHONE = gql`
    mutation EDIT_PHONE($name: String!, $phone: String!) {
        changePhone(name: $name, phone: $phone) {
            name
            phone
            id
        }
    }
`
