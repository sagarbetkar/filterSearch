import { gql } from "apollo-server-express";

export const types = gql`
  type Query {
    hello: String
  }
`;
