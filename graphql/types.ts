import { gql } from "apollo-server-express";

export const types = gql`
  type Query {
    hello: String
    searchUsers(
      limit: Int
      offset: Int
      country: String
      price: [Int]
      age: [Int]
      shirtSize: [String]
      gender: String
    ): Feed!
  }

  type Feed {
    user: [User!]!
    count: Int!
  }
  type User {
    _id: String
    name: String
    avatar: String
    gender: String
    shirtSize: String
    country: String
    age: Int
    price: String
  }
`;
