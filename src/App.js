import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import CreatePlayer from './CreatePlayer';
import Scoreboard from './Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  handleAddPlayer = (player) => {
    this.setState((currentState) => ({
      players: [ ...currentState.players, player]
    }));
  };

  render() {
    return (
      <div>
        <Route path="/" render={() => (
            <Header />
          )} />
        <div className="container">
          <Route exact path="/create" render={({ history }) => (
            <div>
              <CreatePlayer players={ this.state.players } onAddPlayer={ (player) => { 
                this.handleAddPlayer(player) 
                history.push("/scoreboard")
              } } />
            </div>
          )} />
          <Route exact path="/scoreboard" render={() => (
            <Scoreboard players={ this.state.players } />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
