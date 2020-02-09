/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from 'react';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import { ContextConsumer } from './theme';
import '../styles/base.css';
import '../fonts/inter.css';

import Header from './header';

interface LayoutProps {
  children: ReactNode;
  shouldShowPortfolio?: boolean;
  params?: string;
}

interface LayoutState {
  darkMode: boolean;
}

export default class Layout extends React.Component<LayoutProps, LayoutState> {
  state = {
    darkMode: true,
  };

  toggleMode = (): void => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };

  render() {
    return (
      <ContextConsumer>
        {context => (
          <ThemeProvider
            theme={{ mode: (context as any).state.darkMode ? 'dark' : 'light' }}
          >
            <>
              <GlobalStyles />
              <Header
                toggleMode={(context as any).toggleMode}
                darkMode={(context as any).state.darkMode}
                {...this.props}
              />
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
                }}
              >
                <main>{this.props.children}</main>
                <footer></footer>
              </div>
            </>
          </ThemeProvider>
        )}
      </ContextConsumer>
    );
  }
}

// export default Layout;
