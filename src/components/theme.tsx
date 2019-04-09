// This provides context to the entire app component

import React, { Component } from 'react';

const { Provider, Consumer: ContextConsumer } = React.createContext({});

interface ContextProviderState {
  darkMode: boolean;
}

export default class ContextProvider extends Component<ContextProviderState> {
  state = {
    darkMode: true,
  };

  componentDidMount() {
    // Persist state on first load
    const localStorageRef = localStorage.getItem('designerxio-color-mode');
    if (localStorageRef) {
      this.setState({
        darkMode: localStorageRef === 'true',
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'designerxio-color-mode',
      JSON.stringify(this.state.darkMode)
    );
  }

  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          toggleMode: () =>
            this.setState({
              darkMode: !this.state.darkMode,
            }),
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ContextConsumer };
