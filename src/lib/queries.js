import {gql} from "@apollo/client"

export const GET_PERSONS = gql`
    query GET_PERSONS {
        allPersons {
            name
            phone
            id
        }
    }
`

export const ADD_PERSON = gql`
    mutation ADD_PERSON($person: NewPerson!) {
        addPerson(person: $person) {
            name
            address {
                city
                street
            }
        }
    }
`

export const EDIT_PHONE = gql`
    mutation EDIT_PHONE($name: String!, $phone: String!) {
        changePhone(name: $name, phone: $phone) {
            name
            phone
            id
        }
    }
`
