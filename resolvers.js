import pc from "@prisma/client";
import { AuthenticationError, ForbiddenError } from "apollo-server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new pc.PrismaClient();

const resolvers = {
  Query: {
    users: async (_, args, { userId }) => {
      console.log(userId);
      if (!userId) throw new ForbiddenError("You must be logged in");
      const users = await prisma.user.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          id: {
            not: userId,
          },
        },
      });
      return users;
    },
  },

  Mutation: {
    signupUser: async (_, { userNew }) => {
      //console.log(userId);
      const user = await prisma.user.findUnique({
        where: { email: userNew.email },
      });
      if (user) throw new AuthenticationError("User already exist with that email");
      const hashedPassword = await bcrypt.hash(userNew.password, 10);
      const newUser = await prisma.user.create({
        data: {
          ...userNew,
          password: hashedPassword,
        },
      });
      return newUser;
    },
    signinUser: async (_, { userSignin }) => {
      const user = await prisma.user.findUnique({
        where: { email: userSignin.email },
      });
      if (!user)
        throw new AuthenticationError("User does not exists with that email");
      const doMatch = await bcrypt.compare(userSignin.password, user.password);
      if (!doMatch)
        throw new AuthenticationError("Email or password is invalid");
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return { token };
    },
  },
};

export default resolvers;