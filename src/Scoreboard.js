import React, { Component } from 'react';
import Toggle from './Toggle';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

class Scoreboard extends Component {
    static propTypes = {
        players: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            title: "Hide", 
            maskgamesplayed: ""
        };
    }

    handleToggle = (oldTitle) => {
        this.setState((currentState) => ({
            title: oldTitle === "Hide" ? "Show" : "Hide",   
            maskgamesplayed: oldTitle === "Hide" ? "*" : ""
        }));
    };

    render() {
        const { players } = this.props;
        
        return(
            <div>
                <Toggle title={ this.state.title } onToggle={ this.handleToggle } />
                <PlayerList players={ players } mask={ this.state.maskgamesplayed } />
            </div>
        );
    }
}

export default Scoreboard;
