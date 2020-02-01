import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import ThemedLayout from '../components/theme';

const Work = () => (
  <Layout>
    <h1>This is the admin page</h1>
    <Link to="/about/">Go to page 2</Link>
  </Layout>
);

export default Work;
