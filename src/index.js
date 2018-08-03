const { GraphQLServer } = require('graphql-yoga')

let links = [{
    id: 'link-0',
    url: 'www.hotographql.com',
    description: 'Fullstack tutorial for GrapQL',
    creator: "The Internet",
    characters: 473455
},{
    id: 'link-1',
    url: 'www.lianthompson.me',
    description: 'My website',
    creator: "The Internet",
    characters: 455
},{
    id: 'link-2',
    url: 'www.celebitchy.com',
    description: 'Escapism can be smart',
    creator: "The Internet",
    characters: 35
}]

// 1
const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
}

type Link {
    id: ID!
    description: String!
    url: String!
    creator: String!
    characters: Int!
}
`

// 2
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
    },
    // Link: {
    //     id: (root) => root.id,
    //     description: (root) => root.description,
    //     url: (root) => root.url,
    //     creator: (root) => root.creator,
    //     characters: (root) => root.characters
    //   }
}

// 3

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))