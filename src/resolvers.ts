import * as bcrypt from 'bcryptjs';
import { IResolvers } from "graphql-tools";
import { User } from "./entity/User";

export const resolvers: IResolvers = {
  Query: {
    hello: () => 'Hello!'
  },
  Mutation: {
    register: async (_, { email,  password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        email,
        password: hashedPassword
      }).save()

      return true;
    }
  }
}