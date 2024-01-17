import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      orders
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ORDER = gql`
  query getOrder($_id: ID!) {
    order(_id: $_id) {
      _id
      purchaseDate
      user
      products
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProduct($_id: ID! {
    product(_id: $_id)  {
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