const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema.js')
const { resolvers } = require('./resolver.js')

const port = process.env.PORT || 9090

const server = new ApolloServer({ resolvers, typeDefs })

server.listen({ port }, () => console.log(`Server runs at http://localhost:${port}`))