import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  primaryColor,
  primaryHoverColor,
  backgroundColor,
  textColor,
} from './colors';

export const FullWidthButton = styled.button`
  width: 100%;
  height: 100px;
  background: ${primaryColor};
  text-align: center;
  line-height: 0.1rem;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-weight: 900;
  transition: all 200ms ease-in;
  :hover {
    background: ${primaryHoverColor};
  }
`;

const CoursetileStyles = styled.section`
  display: flex;
  flex-direction: column;
  .box {
    width: 360px;
    height: 270px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 2px;
    overflow: hidden;
    background: ${backgroundColor};
    color: ${textColor};
  }
  .thumbnail {
    width: 100%;
    height: 250px;
    background: pink;
  }
  .course-info {
    padding: 12px;
  }
  .start-learning {
  }
`;

interface CoursetileProps {
  courseinfo: string;
}

const Coursetile = (props: CoursetileProps) => (
  <CoursetileStyles>
    <Link to="/page-2/" className="box">
      <div className="thumbnail" />
      <div className="course-info">
        <h4>{props.courseinfo}</h4>
        <div className="tags">
          <span>Figma</span>
          <span>Gatsby</span>
          <span>React</span>
          <span>MongoDB</span>
        </div>
      </div>
      <FullWidthButton onClick={(): void => console.log('clicked')}>
        Start Learning
      </FullWidthButton>
    </Link>
  </CoursetileStyles>
);

export default Coursetile;
