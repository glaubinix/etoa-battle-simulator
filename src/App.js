import React, { Component } from 'react';
import ResultContainer from './containers/ResultContainer';
import PlayerContainer from './containers/PlayerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PlayerContainer/>
          <ResultContainer/>
      </div>
    );
  }
}

export default App;
