import React from 'react';
import { graphql } from 'gatsby';
import { SanityWorksQueryQuery } from '../../graphqlTypes';

type Props = {
  data: SanityWorksQueryQuery;
};

export const query = graphql`
  query SanityWorksQuery($slug: String) {
    sanityWork(slug: { current: { eq: $slug } }) {
      title
    }
  }
`;

export default ({ data }: Props) => (
  <div>
    <h1>{data.sanityWork?.title}</h1>
  </div>
);
