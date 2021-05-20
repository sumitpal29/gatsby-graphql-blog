const _isEmpty = require('lodash/isEmpty');
const _filter = require('lodash/filter');
const _intersection = require('lodash/intersection');
const _get = require('lodash/get');

// executed at build time
// function to create pages dynamically with templates
exports.createPages = ({actions: {createPage}}) => {
    console.log('Creating pages')
    createPage({
        path: "/posts",
        component: require.resolve("./src/templates/Posts.js"),
        context: {
            title: 'This is post page'
        }
    })
};

exports.createSchemaCustomization = ({actions}) => {
    const {createTypes} = actions;
    createTypes(`
        type Content {
            header: String,
            description: String
        }
        type BlogPosts {
            id: ID,
            title: String,
            tags: [String!]!,
            content: Content
        }
        input TitleFilter {
            eq: String,
            in: String
        }
    `);
};

exports.createResolvers = ({createResolvers}) => {
    createResolvers({
        Query: {
            allPosts: {
                type: ["BlogPosts"],
                args: {
                    filterByTags: "[String]",
                    filter: `input filterPosts {title: TitleFilter}`
                },
                resolve(source, args){ 
                    // resolve function will be executed when ever you hit the query
                    // params - source, args, context, info
                    const {filterByTags} = args;
                    const posts = [{
                        id: `cx1`,
                        title: 'graphql-gatsby-blog',
                        tags: ['tutorial', 'blog', 'Gatsby'],
                        content: {
                            header: 'How to a create blog with gatsby',
                            description: 'not available!'
                        }
                    },{
                        id: `cx2`,
                        title: 'Blogs with Sanity CMS',
                        tags: ['tutorial', 'blog', 'Sanity'],
                        content: {
                            header: 'How to a build serverless blog with Sanity',
                            description: 'not available!'
                        }
                    }];

                    if(filterByTags) {
                        return posts.reduce((acc, post) => {
                            const tags = _get(post, 'tags');
                            !_isEmpty(_intersection(tags, filterByTags)) && acc.push(post);
                            return acc;
                        }, []);
                    }

                    return posts;
                }
            }
        }
    })
};

