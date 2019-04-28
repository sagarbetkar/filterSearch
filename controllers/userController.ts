import { User } from "../models/User";

export const userController = {
  searchUsers: (root: any, args: any) => {
    const paginationParams = {
      limit: args.limit || 9,
      offset: args.offset || 0
    };

    if (args.limit) delete args.limit;
    if (args.offset) delete args.offset;
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
    const user = User.find(where)
      .skip(paginationParams.offset)
      .limit(paginationParams.limit);
    const count = User.find({}).countDocuments();
    return { user, count };
  }
};
