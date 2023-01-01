import { gql } from '@apollo/client';


export const CREATE_APPOINTMENT = gql`
mutation createAppointment($date: String!, $time: String!, $name: String!, $email: String!, $phone: String!) {
  createAppointment(date: $date, time: $time, name: $name, email: $email, phone: $phone) {
    _id
    username
    appointments {
      _id
      date
      email
      name
      phone
      time
    }
  }
}
`;
export const ADD_USER = gql`mutation AddUser($username: String!, $password: String!) {
  addUser(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const LOGIN= gql`mutation LogIn($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      appointments {
        _id
        date
        email
        name
        phone
        time
      }
    }
  }
}`