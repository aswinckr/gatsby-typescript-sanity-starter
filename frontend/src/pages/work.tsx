import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
// import ThemedLayout from '../components/theme';
import { WorksDataQuery } from '../graphqlTypes';

import SEO from '../components/seo';

type Props = {
  data: WorksDataQuery;
};

const Work = ({ data }: Props) => (
  <Layout>
    {console.log(process.env.SANITY_PROJECT_ID)}
    {data.allSanityWork.nodes.forEach(node => console.log(node.title))}
    <SEO title="Work" keywords={[`work`, `portfolio`, `react`]} />
    <h1>This is where I showcase my work</h1>
    <Link to="/about/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  query WorksData {
    allSanityWork {
      nodes {
        title
      }
    }
  }
`;

export default Work;
