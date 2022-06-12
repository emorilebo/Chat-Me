import { ApolloServer, gql } from "apollo-server";
import crypto from "crypto";

//console.log(crypto.randomUUID());

const users = [
  {
    id: "referfs",
    firstname: "Godfrey",
    lastName: "Lebo",
    email: "emorilebo@gmail.com",
    password: "12345",
  },
  {
    id: "fwef232",
    firstname: "Danny",
    lastName: "Crane",
    email: "dannycrane@gmail.com",
    password: "123456",
  },
];

const Todos = [
  {
    title: "buy book",
    by: "referfs",
  },
  {
    title: "write code",
    by: "referfs",
  },
  {
    title: "record video",
    by: "fwef232",
  },
];

const typeDefs = gql`
  type Query {
    # greet:String
    users: [User]
    user(id: ID!): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(userNew: UserInput!): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    todos: [Todo]
  }

  type Todo {
    title: String!
    by: ID!
  }
`;

const resolvers = {
  Query: {
    // greet:()=>"Hello Emori"
    users: () => users,
    user: (_, { id }, {userLoggedIn}) => {
      if(!userLoggedIn) throw new Error("you are not logged in")
      return users.find((item) => item.id == id);
    },
  },
  User: {
    todos: (parent) => {
      return Todos.filter((todo) => todo.by == parent.id);
    },
  },
  Mutation: {
    createUser: (_, { userNew }) => {
      const newUser = {
        id: crypto.randomUUID(),
        ...userNew,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:{
    userLoggedIn: true
  },
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
