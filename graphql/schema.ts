import { ApolloServer } from "apollo-server-express";
import { types } from "./types";
import { resolvers } from "./resolvers";

export const server = new ApolloServer({
  typeDefs: types,
  resolvers
});
