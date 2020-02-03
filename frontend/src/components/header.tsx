import { Link } from 'gatsby';
import React, { Component } from 'react';
import { darkBackgroundColor, headerLinkColor, primaryColor } from './colors';
import styled from 'styled-components';
import Logo from './logo';
import OverflowMenu from '../images/overflow-menu.svg';
import Toggle from 'react-toggle';
import { device } from '../utils';

const HeaderStyles = styled.header`
  background: ${darkBackgroundColor};
  margin-bottom: 1.45rem;
  .nav {
    max-width: 960px;
    padding: 0.8rem 1.0875rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo {
      vertical-align: middle;
      opacity: 1;
      display: inline-block;
      width: 100px;
      position: relative;
      top: 4px;
    }
  }
  svg {
    position: relative;
    top: 6px;
  }

  .nav-right {
    @media ${device.tablet} {
      margin-left: auto;
    }
    a {
      color: ${headerLinkColor};
      opacity: 0.6;
      margin: 0 16px;
      font-size: 0.9rem;
      -webkit-transition: opacity 0.25s;
      transition: opacity 0.25s;
    }
    a:hover {
      opacity: 1;
    }
  }
  .nav-right form {
    display: inline;
    margin: 0 20px;
  }
  input {
    border: none;
    border-radius: 4px;
    padding: 2px 10px;
  }

  .nav-right > a,
  .nav-right > form {
    margin-left: auto;
    display: none;
    @media ${device.tablet} {
      display: inline-block;
    }
  }

  .overflow-menu {
    display: inline-block;
    @media ${device.tablet} {
      display: none;
    }
  }

  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    top: 6px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4d4d4d;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #4d4d4d;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: #4d4d4d;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: #4d4d4d;
  }

  .react-toggle-track-check {
    position: absolute;
    font-size: 0.8rem;
    width: 14px;
    height: 10px;
    top: 12px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 6px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    font-size: 0.8rem;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 12px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 12px;
    opacity: 1;
    font-size: 0.8rem;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: #000;
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px ${primaryColor};
    -moz-box-shadow: 0px 0px 3px 2px ${primaryColor};
    box-shadow: 0px 0px 2px 3px ${primaryColor};
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px ${primaryColor};
    -moz-box-shadow: 0px 0px 5px 5px ${primaryColor};
    box-shadow: 0px 0px 5px 5px ${primaryColor};
  }
`;

interface HeaderProps {
  darkMode: boolean;
  toggleMode: () => void;
}

interface HeaderState {
  query: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  state = {
    query: '',
  };

  // https://stackoverflow.com/a/48100616/4272893

  handleChange = (e: React.FormEvent) => {
    this.setState({ query: (e.target as HTMLInputElement).value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  render() {
    return (
      <HeaderStyles>
        <div className="nav">
          {/* Appears only on mobile */}
          <div className="overflow-menu">
            <a href="#">
              <OverflowMenu />
            </a>
          </div>

          <div className="grow">
            <Link to="/" style={{ opacity: 1 }} className="logo">
              <Logo />
            </Link>
          </div>

          <div className="nav-right">
            <Link to="/" activeStyle={{ opacity: 1 }}>
              Home
            </Link>
            <Link to="/about/" activeStyle={{ opacity: 1 }}>
              About
            </Link>

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="Search"
              />
            </form>

            <Toggle
              checked={this.props.darkMode}
              icons={{
                checked: '☀️',
                unchecked: '🌙',
              }}
              onChange={this.props.toggleMode}
            />
          </div>
        </div>
      </HeaderStyles>
    );
  }
}

// TODO - Toggle dark mode functionality from graphQL preference
// TODO - Sliding menu with react portal

export default Header;
