import { userController } from "../controllers/userController";

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    searchUsers: (root: any, args: any) => {
      return userController.searchUsers(root, args);
    }
  }
};
