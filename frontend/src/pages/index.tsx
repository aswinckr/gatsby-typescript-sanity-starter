import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { HomePageDataQuery } from '../../graphqlTypes';


type Props = {
  data: HomePageDataQuery;
};

const index = ({
  data: {
    allSanityPortfolio: { edges: allPortfolios },
  },
}: Props) => {
  return (
    <Layout>
      <h2>Hey there!</h2>
      <BlockContent blocks={allPortfolios[0].node._rawAbout} />
      <p>
        👉 If you are a recruiter and want to learn about my work, please write
        to me at <a>hey@aswin.design</a> and you can hear from me soon
      </p>
      <hr style={{ background: '#ffffff50' }} />
      <h1>🏗</h1>
      <p>
        This website is currently work in progress and you can expect a lot of
        new stuff coming here the next few weeks. Please visit back to see
        updates! .
      </p>
    </Layout>
  );
};

export const query = graphql`
  query HomePageData {
    allSanityPortfolio {
      edges {
        node {
          id
          _rawAbout
        }
      }
    }
  }
`;

export default index;
