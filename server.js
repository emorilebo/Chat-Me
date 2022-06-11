import {ApolloServer, gql} from 'apollo-server'

const users = [
    {
        id: 1,
        firstname: "Godfrey",
        lastName: "Lebo",
        email: "emorilebo@gmail.com",
        password: "12345"

    },
    {
        id: 2,
        firstname: "Danny",
        lastName: "Crane",
        email: "dannycrane@gmail.com",
        password: "123456"
    }
]

const typeDefs = gql`
    type Query{
        # greet:String
        users: [User]
    }
    type User{
        id:ID
        firstName:String
        lastName:String
        email:String
    }
`

const resolvers = {
    Query:{
        // greet:()=>"Hello Emori"
        users:()=>users
    }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });