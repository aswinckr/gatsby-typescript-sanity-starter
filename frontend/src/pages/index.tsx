import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import styled from 'styled-components';
import { WorksDataQuery } from '../../graphqlTypes';

import SEO from '../components/seo';

const IndexPageStyles = styled.div`
  display: flex;
  .work-summary {
    flex: 1;
  }
  .work-preview {
    flex: 2;
  }
  .work-preview-image {
    width: 100%;
    overflow: hidden;
  }
`;

type Props = {
  data: WorksDataQuery;
};

const Index = ({
  data: {
    allSanityWork: { nodes: works },
  },
}: Props) => (
  <Layout>
    <SEO title="Work" keywords={[`work`, `portfolio`, `react`]} />
    <IndexPageStyles>
      <div className="work-summary">
        <p>Summary goes here</p>
      </div>
      <div className="work-preview">
        {works.map((work, index) => (
          <Link to={`/${work.slug?.current}`}>
            <div className="work-preview-image">
              <img
                src={
                  work.mainImage?.asset?.fluid?.src !== null
                    ? work.mainImage?.asset?.fluid?.src
                    : 'https://via.placeholder.com/300x200'
                }
                alt="work-image"
                className="grow"
              />
            </div>
            <h4 key={index}>{work.title}</h4>
          </Link>
        ))}
      </div>
    </IndexPageStyles>
  </Layout>
);

export const query = graphql`
  query WorksData {
    allSanityWork(sort: { fields: _updatedAt }) {
      nodes {
        mainImage {
          asset {
            fluid {
              src
            }
          }
        }
        title
        slug {
          current
        }
      }
    }
  }
`;

export default Index;
