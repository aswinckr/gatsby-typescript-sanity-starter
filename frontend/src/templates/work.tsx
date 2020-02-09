import React from 'react';
import { graphql } from 'gatsby';
import { SanityWorksQueryQuery } from '../../graphqlTypes';
import Layout from '../components/layout';
import BlockContent from '@sanity/block-content-to-react';
import { LinkGetProps } from '@reach/router';

type Props = {
  data: SanityWorksQueryQuery;
  location: LinkGetProps['location'];
};

export const query = graphql`
  query SanityWorksQuery($slug: String) {
    sanityWork(slug: { current: { eq: $slug } }) {
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;

export default (props: Props) => (
  <Layout shouldShowPortfolio params={props.location.search}>
    <h1>{props.data.sanityWork?.title}</h1>
    {props.data.sanityWork !== null && (
      <BlockContent
        blocks={props.data.sanityWork._rawBody!}
        projectId={process.env.SANITY_PROJECT_ID}
        dataset={process.env.SANITY_PROJECT_DATASET}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    )}
  </Layout>
);
