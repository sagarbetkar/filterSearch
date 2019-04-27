import { User } from "../models/User";

export const userController = {
  searchUsers: (root: any, args: any) => {
    const where =
      Object.entries(args).length === 0
        ? {}
        : {
            $and: []
          };
    args.country
      ? where.$and.push({
          country: { $regex: new RegExp(".*" + args.country), $options: "si" }
        })
      : undefined;
    args.gender
      ? where.$and.push({
          gender: args.gender
        })
      : undefined;
    args.shirtSize
      ? where.$and.push({
          shirtSize: { $in: args.shirtSize }
        })
      : undefined;
    args.price
      ? where.$and.push({
          price: { $gte: args.price[0], $lte: args.price[1] }
        })
      : undefined;
    args.age
      ? where.$and.push({
          age: { $gte: args.age[0], $lte: args.age[1] }
        })
      : undefined;
    return User.find(where);
  }
};
