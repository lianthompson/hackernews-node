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
let idCount = links.length
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
    },
    Mutation: {
        // 2
        post: (root, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    },
}

// 3

const server = new GraphQLServer({
    typeDefs: 'schema.graphql',
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))