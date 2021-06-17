const _get = require('lodash/get');
const _forEach = require('lodash/forEach');

// executed at build time
// create pages dynamically with templates
exports.createPages = async ({
  graphql,
  createNodeId,
  actions: { createPage },
}) => {
  const pages = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          _id
          slug {
            current
          }
          title
          _createdAt(formatString: "DD-MM-YY")
          categories {
            title
            colorHexCode
          }
        }
      }
    }
  `);

  // const localPages = await graphql(`
  //   query {
  //     localMarkdowns: allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);

  // _forEach(_get(localPages, 'data.localMarkdowns.nodes', []), (node) => {
  //   const slug = _get(node, 'frontmatter.slug');
  //   createPage({
  //     path: `posts/${slug}`,
  //     component: require.resolve('./src/templates/LocalMarkdownRenderer.js'),
  //     context: {
  //       slug,
  //     },
  //   });
  // });

  // creating post pages
  _forEach(pages.data.posts.nodes, (postObj) => {
    const slug = _get(postObj, 'slug.current', createNodeId(postObj._id));
    createPage({
      path: `/posts/${slug}`,
      component: require.resolve('./src/templates/Posts.js'),
      context: {
        slug,
      },
    });
  });
};
