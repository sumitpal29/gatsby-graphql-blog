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