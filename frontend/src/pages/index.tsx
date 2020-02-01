import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';

import Layout from '../components/layout';
// import ThemedLayout from '../components/theme';

import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to the homepage</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
