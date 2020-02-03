/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query AllWorksAndPosts {
      allSanityWork {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
      allSanityBlog {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const works = result.data.allSanityWork.edges.map(({ node }) => node);
  works.forEach(page => {
    actions.createPage({
      path: page.slug.current,
      component: path.resolve('./src/templates/work.tsx'),
      context: {
        slug: page.slug.current,
      },
    });
  });

  const blogs = result.data.allSanityBlog.edges.map(({ node }) => node);
  blogs.forEach(page => {
    actions.createPage({
      path: page.slug.current,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        slug: page.slug.current,
      },
    });
  });
};
