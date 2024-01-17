import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($_id: ID!, $quantity: [Int]!) {
    updateProduct(_id: $_id, quantity: $quantity) {
      _id
      name
      description
      image
      price
      quantity
      sizes
    }
  }
`;



