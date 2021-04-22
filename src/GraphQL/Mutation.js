import {gql} from "@apollo/client"

export const CREATE_USER =gql`
mutation createUser($name: String! $userName: String! $password: String! $userStatus: String!){
    createUser(name: $name userName: $userName password: $password userStatus: $userStatus){
        id
        name
        userName
    }
}
`

export const UPDATE_PASSWORD =gql`
mutation updatePass($userName: String! $oldPassword: String! $newPassword: String!){
    updatePass(userName: $userName oldPassword: $oldPassword newPassword: $newPassword){
       message
    }
}
`

export const DELETE_USER =gql`
mutation deleteUser($id: ID!){
    deleteUser(id: $id){
       message
    }
}
`
export const LOGIN_USER =gql`
mutation loginUser($userName: String! $password: String!){
    loginUser(userName: $userName password: $password){
        successful,
        message,
        name,
        token,
        studentStatus,
        employerStatus,
    }
}
`