import {gql} from "@apollo/client"

export const CREATE_USER1 =gql`
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
        fname,
        lname,
        token,
        studentStatus,
        employerStatus,
    }
}
`
export const CREATE_USER =gql`

mutation createstuser($fname: String! $lname: String! $oname: String! $userName: String! $password: String! $userStatus: String! $dateOfBirth: String! $school: String! $phone: String! $semail: String! $pemail: String! $industry: String!){
    createstuser(fname: $fname lname: $lname oname: $oname userName: $userName password: $password userStatus: $userStatus dateOfBirth: $dateOfBirth school: $school phone: $phone semail: $semail pemail: $pemail industry: $industry ){
        successful,
        message
       
    }
}
`