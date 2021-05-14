import { gql } from "@apollo/client"

export const CREATE_USER1 = gql`
mutation createUser($name: String! $userName: String! $password: String! $userStatus: String!){
    createUser(name: $name userName: $userName password: $password userStatus: $userStatus){
        id
        name
        userName
    }
}
`

export const UPDATE_PASSWORD = gql`
mutation updatePass($userName: String! $oldPassword: String! $newPassword: String!){
    updatePass(userName: $userName oldPassword: $oldPassword newPassword: $newPassword){
       message
    }
}
`

export const DELETE_USER = gql`
mutation deleteUser($id: ID!){
    deleteUser(id: $id){
       message
    }
}
`
export const LOGIN_USER = gql`
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
export const CREATE_USER = gql`

mutation createstuser(
    $first_name: String! 
    $last_name: String! 
    $oname: String 
    $user_name: String! 
    $pass: String! 
    $reg_status: String! 
    $date_of_birth: String! 
    $school_name: String! 
    $phone_number: String! 
    $school_email: String! 
    $p_email: String! 
    $industry: String){
        
    createstuser(
    fname: $first_name 
    lname: $last_name 
    oname: $oname 
    userName: $user_name 
    password: $pass 
    userStatus: $reg_status 
    dateOfBirth: $date_of_birth 
    school: $school_name 
    phone: $phone_number 
    semail: $school_email 
    pemail: $p_email 
    industry: $industry 
    cvpath: $reg_status
    photopath: $reg_status){
        successful,
        message
       
    }
}
`