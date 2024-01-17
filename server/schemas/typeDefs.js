const typeDefs = `
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float    
    quantity: [Int]
    sizes: [String]
  }

  type Order {
    _id: ID
    purchaseDate: String
    user: User
    products: [Product]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String, password: String): User
    updateProduct(_id: ID!, quantity: [Int]!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;