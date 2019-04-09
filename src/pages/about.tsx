import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`About`]} />
    <h1>Welcome to the About page</h1>
    <Link to="/">Go to home</Link>
  </Layout>
);

export default About;
