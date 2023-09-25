const fs = require('fs')
const path = require('path')
const { ApolloServer } = require('apollo-server')

const { resolvers } = require('./resolver.js')

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8')

const port = process.env.PORT || 9090

const server = new ApolloServer({ resolvers, typeDefs })

server.listen({ port }, () => console.log(`Server runs at http://localhost:${port}`))