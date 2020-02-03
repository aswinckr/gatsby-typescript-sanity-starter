import React from 'react';
import { graphql } from 'gatsby';
import { SanityBlogsQueryQuery } from '../../graphqlTypes';

type Props = {
  data: SanityBlogsQueryQuery;
};

export const query = graphql`
  query SanityBlogsQuery($slug: String) {
    sanityBlog(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
    }
  }
`;

export default ({ data }: Props) => (
  <div>
    <h1>{data.sanityBlog?.title}</h1>
  </div>
);
