import { gql } from "apollo-server-express";

export const types = gql`
  type Query {
    hello: String
    searchUsers(
      country: String
      price: [Int]
      age: [Int]
      shirtSize: [String]
      gender: String
    ): [User!]!
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
