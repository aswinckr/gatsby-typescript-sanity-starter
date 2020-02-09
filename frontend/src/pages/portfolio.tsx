import React, { useState, CSSProperties } from 'react';
import { LinkGetProps, Link } from '@reach/router';
import { graphql } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import BlockContent from '@sanity/block-content-to-react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { device } from '../utils';
import {
  linkColor,
  sidebarInactiveColor,
  backgroundColor,
  contrastBackgroundColor,
  borderLineColor,
  primaryColor,
} from '../components/colors';
// import CompanyLogo from '../components/companyLogos';

import Layout from '../components/layout';
import styled from 'styled-components';
import {
  PortfolioPageDataQuery,
  SanityWorkDetails,
  SanityTestimonial,
} from '../../graphqlTypes';

const IndexPageStyles = styled.div`
  display: flex;
  flex-wrap: wrap;

  section {
    padding-bottom: 60px;
  }
  .overall-experience {
    ul {
      margin-left: 14px;
      border-left: 1px solid ${borderLineColor};
      position: relative;
      .circle {
        width: 30px;
        height: 30px;
        border-radius: 100px;
        background: ${sidebarInactiveColor};
        display: block;
        position: absolute;
        left: -15px;
        overflow: hidden;
        border: 1px solid ${borderLineColor};
      }

      .circle-first-child {
        background: ${backgroundColor}!important;
        border: 1px dashed ${sidebarInactiveColor};
        padding-left: 10px;
        color: #7d7d7d;
      }
      li {
        list-style: none;
        padding-left: 32px;
        margin-bottom: 32px;
      }
    }
  }
  .portfoilo-header {
    width: 100%;
    padding: 60px 0;
  }
  .portfolio-sidebar {
    margin-left: 0;
    display: none;
    @media ${device.tablet} {
      display: block;
    }

    li {
      list-style: none;
      padding-bottom: 16px;
    }

    a {
      color: ${sidebarInactiveColor};
      cursor: pointer;
    }
    .active {
      color: ${linkColor}!important;
      font-weight: 700;
      padding-left: 16px;
      .nav-highlighter {
        opacity: 100;
      }
    }
    .nav-highlighter {
      display: block;
      position: absolute;
      left: 0;
      width: 4px;
      height: 30px;
      background: ${linkColor};
      opacity: 0;
    }
  }
  .portfolio-summary {
    /* flex: 1; */
    width: 35%;
    position: relative;
  }
  .key-achievements {
    padding-top: 4px;
    border-radius: 4px;
    h4 {
      margin: 18px 12px 32px 0;
    }
    ul {
      margin-left: 16px;
      li {
        list-style: circle;
      }
    }
  }
  .portfolio-preview {
    /* flex: 2; */
    @media ${device.tablet} {
      width: 65%;
    }
    width: 100%;
  }
  .portfolio-preview-image {
    width: 100%;
    overflow: hidden;
    min-height: 250px;
    display: flex;
    img {
      margin-bottom: 0;
    }
  }
  .portfolio-showcase-wrapper {
    padding: 24px 24px 0 24px;
    margin: 60px 0 40px 0;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    background: ${contrastBackgroundColor};
    color: #fff;
    font-size: 0.9em;

    h2 {
      color: #fff;
      width: 100%;
      margin: 24px 0 44px 0;
    }
    .portfolio-preview-problem,
    .portfolio-preview-solution {
      width: 50%;
      font-size: 0.9em;
      h2 {
        margin: 12px 0 32px 0;
      }
      h4 {
        margin-bottom: 12px;
      }
    }
  }
  .what-people-say {
    display: flex;
    flex-wrap: wrap;
    h2 {
      width: 100%;
    }
    .what-people-say-testimonial {
      /* width: 50%; */
      padding-right: 16px;
      font-style: italic;
      background: #333446;
      padding: 92px 32px 32px 32px;
      border-radius: 8px;
      margin-bottom: 60px;
      position: relative;
      margin-top: 60px;
      color: #fff;

      .author-photo img {
        border: 3px solid #fff;
        border-radius: 100px;
        overflow: hidden;
        margin-left: 16px;
        margin-top: 8px;
        margin-bottom: 18px;
        position: absolute;
        top: -50px;
        left: 10px;
      }
      .what-people-say-author {
        opacity: 0.5;
        margin-bottom: 0;
      }
    }
  }
  .so-are-we-moving-forward {
    margin-bottom: 72vh;
  }
`;

const sidebarNavElements = [
  {
    title: 'About Me',
    scrollKey: 'aboutMe',
  },
  {
    title: 'My Overall Work Experience',
    scrollKey: 'overallWorkExperience',
  },
  {
    title: '$work',
    scrollKey: null,
  },
  {
    title: 'Nice things people say',
    scrollKey: 'whatPeopleSay',
  },
  {
    title: 'What I am like to work with',
    scrollKey: 'cultureFit',
  },
  {
    title: 'So, Are we moving forward?',
    scrollKey: 'nextSteps',
  },
];

type Props = {
  data: PortfolioPageDataQuery;
  location: LinkGetProps['location'];
};

const Index = ({
  data: {
    allSanityPortfolio: { edges: allPortfolios },
  },
  location,
}: Props) => {
  const [sideNavStyle, setSideNavStyle] = useState<CSSProperties>({
    position: 'relative',
  });
  const scrollPositionForSideNav = 135;
  const { node: portfolio } = allPortfolios[0];
  const allWork: [SanityWorkDetails] = portfolio._rawWork;
  const allTestimonials: [SanityTestimonial] = portfolio._rawTestimonials;
  const referrer = location.search.split('=')[1];
  const accessGrantKeywords = portfolio.accessGrant;

  useScrollPosition(
    ({ currPos }) => {
      const isReadyToStick = currPos.y < -scrollPositionForSideNav;
      const stickyStyle: CSSProperties = {
        position: isReadyToStick ? 'fixed' : 'relative',
        top: isReadyToStick ? scrollPositionForSideNav : 0,
      };

      if (JSON.stringify(stickyStyle) === JSON.stringify(sideNavStyle)) return;

      setSideNavStyle(stickyStyle);
    },
    [sideNavStyle]
  );

  if (accessGrantKeywords?.includes(referrer)) {
    return (
      <Layout>
        <IndexPageStyles>
          <h1 className="portfoilo-header">Aswin Ranganathan's Portfolio</h1>
          <div className="portfolio-summary">
            <ul className="portfolio-sidebar" style={{ ...sideNavStyle }}>
              {sidebarNavElements.map((navElement, key) => (
                <span key={key}>
                  {navElement.title === '$work' ? (
                    allWork.map((eachWork, index) => (
                      <li key={index}>
                        <ScrollLink
                          className="easing"
                          to={
                            eachWork.companyName &&
                            eachWork.companyName !== null
                              ? eachWork.companyName
                              : 'null'
                          }
                          spy={true}
                          duration={1000}
                          offset={-140}
                          smooth={'easeInOutCubic'}
                          activeClass="active"
                        >
                          <span className="nav-highlighter easing"></span>
                          Work at {eachWork.companyName}
                        </ScrollLink>
                      </li>
                    ))
                  ) : (
                    <li>
                      <ScrollLink
                        className="easing"
                        to={navElement.scrollKey!}
                        spy={true}
                        duration={1000}
                        offset={-140}
                        smooth={'easeInOutCubic'}
                        activeClass="active"
                      >
                        <span className="nav-highlighter easing"></span>
                        {navElement.title}
                      </ScrollLink>
                    </li>
                  )}
                </span>
              ))}
            </ul>
          </div>
          <div className="portfolio-preview">
            <Element name="aboutMe">
              <section className="about">
                <h2>Aloha, {referrer}!</h2>
                <BlockContent blocks={portfolio._rawAbout} />
              </section>
            </Element>
            <Element name="overallWorkExperience">
              <section className="overall-experience">
                <h2>My Overeall Experience</h2>
                <ul>
                  <>
                    <span className="circle circle-first-child">?</span>
                    <li
                      style={{ opacity: 0.5 }}
                    >{`Lead Product Designer, ${referrer}?`}</li>
                  </>
                  {allPortfolios[0].node.experience?.map((experience, key) => {
                    return (
                      <span key={key}>
                        <span className="circle">
                          <img
                            src={experience?.companyLogo?.asset?.fluid?.src!}
                            alt={experience?.company!}
                          />
                        </span>
                        <li key={key}>
                          {experience?.designation}, {experience?.company}
                        </li>
                      </span>
                    );
                  })}
                </ul>
              </section>
            </Element>

            {allWork.map((work, index) => (
              <Element
                name={
                  work.companyName && work.companyName !== null
                    ? work.companyName
                    : 'null'
                }
                key={index}
              >
                <section
                  className={`work-section work-section-${work?.companyName}`}
                >
                  <h2>My Work at Grab</h2>
                  <div className="key-achievements">
                    <h4>Key Achievements</h4>
                    <BlockContent blocks={allWork[index].keyAchievements} />
                  </div>

                  {work.work?.map((workThumbnail, indexThumbnail) => {
                    if (workThumbnail && workThumbnail === null) return;
                    else
                      return (
                        <Link
                          to={workThumbnail?.slug?.current!}
                          key={indexThumbnail}
                        >
                          <div
                            className="portfolio-showcase-wrapper soft-shadow grow"
                            style={{
                              background: `${
                                workThumbnail?.themeColor
                                  ? workThumbnail?.themeColor?.hex
                                  : '#f5f5f5'
                              }`,
                            }}
                          >
                            <h2>{workThumbnail?.title}</h2>
                            <div className="portfolio-preview-problem">
                              <h4>Problem</h4>
                              <BlockContent
                                blocks={workThumbnail?.problemStatement}
                              />
                            </div>
                            <div className="portfolio-preview-solution">
                              <h4>Solution & Impact</h4>
                              <BlockContent blocks={workThumbnail?.solution} />
                            </div>

                            <div className="portfolio-preview-image ">
                              {workThumbnail?.mainImage && (
                                <img
                                  src={
                                    portfolio.work &&
                                    portfolio.work[index]?.work &&
                                    portfolio.work[index]?.work[indexThumbnail]
                                      ?.mainImage?.asset?.fluid?.src !== null
                                      ? portfolio.work[index]?.work[
                                          indexThumbnail
                                        ]?.mainImage?.asset?.fluid?.src
                                      : 'https://placehold.it/800x500'
                                  }
                                  alt="Placeholder Image"
                                  className="soft-shadow"
                                />
                              )}
                            </div>
                          </div>
                        </Link>
                      );
                  })}
                </section>
              </Element>
            ))}
            <Element name="whatPeopleSay">
              <section className="what-people-say">
                <h2>Nice Things People Say</h2>
                {allTestimonials.map((testimonial, index) => (
                  <div
                    className="what-people-say-testimonial soft-shadow grow"
                    key={index}
                  >
                    <div className="author-photo">
                      <img
                        src={
                          portfolio.testimonials !== null
                            ? portfolio.testimonials[index]?.authorPhoto?.asset
                                ?.fluid?.src!
                            : 'https://placehold.it/50x50'
                        }
                        alt={testimonial.author!}
                        width="100"
                        height="100"
                      />
                    </div>
                    <span key={index}>
                      <BlockContent blocks={testimonial.statement} />
                      <p className="what-people-say-author">
                        {testimonial.author}
                      </p>
                    </span>
                  </div>
                ))}
              </section>
            </Element>
            <Element name="cultureFit">
              <section className="what-am-i-like-to-work-with">
                <h2>What Am I Like to Work With</h2>
                <BlockContent blocks={portfolio._rawMyPreferences} />
              </section>
            </Element>
            <Element name="nextSteps">
              <section className="so-are-we-moving-forward">
                <h2>So are we moving forward?</h2>
                <p>
                  If you liked what you saw, write to me at me@aswin.design and
                  you are on my priority list
                </p>
              </section>
            </Element>
          </div>
        </IndexPageStyles>
      </Layout>
    );
  } else return <p>Sorry you are not authorized</p>;
};

export const query = graphql`
  query PortfolioPageData {
    allSanityPortfolio {
      edges {
        node {
          id
          _rawAbout
          profilePhoto {
            asset {
              fluid {
                src
              }
            }
          }
          profilePhoto {
            asset {
              fluid {
                srcSet
              }
            }
          }
          experience {
            company
            companyLogo {
              asset {
                fluid {
                  src
                }
              }
            }
            designation
            currentlyWorking
          }
          testimonials {
            authorPhoto {
              asset {
                fluid {
                  src
                }
              }
            }
          }
          _rawWork(resolveReferences: { maxDepth: 10 })
          work {
            companyName

            work {
              themeColor {
                hex
              }
              title
              _rawProblemStatement
              _rawSolution
              mainImage {
                asset {
                  fluid {
                    srcSet
                    src
                  }
                }
              }
            }
          }
          _rawTestimonials
          _rawMyPreferences
          accessGrant
        }
      }
    }
  }
`;

export default Index;

{
  /* <div className="portfolio-preview">
{works.map((work, index) => (
  <Link to={`/${work.slug?.current}`}>
    <div className="portfolio-preview-image">
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
</div> */
}
