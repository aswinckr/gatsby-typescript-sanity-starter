import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import ThemedLayout from '../components/theme';

import SEO from '../components/seo';

const Work = () => (
  <Layout>
    <SEO title="Work" keywords={[`work`, `portfolio`, `react`]} />
    <h1>This is where I showcase my work</h1>
    <Link to="/about/">Go to page 2</Link>
  </Layout>
);

export default Work;
