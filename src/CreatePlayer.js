import React, { Component } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';

class CreatePlayer extends Component {
    static propTypes = {
        onAddPlayer: PropTypes.func.isRequired, 
        players: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            firstname: '', 
            lastname: '', 
            username: '', 
            usernameExists: false,
        };
    }

    handleChange = (event) => {
        if (event.target.name === 'firstname') {
            this.setState({
                firstname: event.target.value
            });
        }
        if (event.target.name === 'lastname') {
            this.setState({
                lastname: event.target.value
            });
        }
        if (event.target.name === 'username') {
            this.setState({
                username: event.target.value
            });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const values = serializeForm( event.target, { hash: true } );
        const invalidPlayer = this.playerExists(values.username);

        if (!invalidPlayer) {
            this.props.onAddPlayer(values);
        }

        this.setState((currentState) => ({
            usernameExists: invalidPlayer
        }));
    };

    playerExists = (inputUsername) => {
        const players = this.props.players;
        console.log(players);
        console.log(inputUsername);
        for (let player of players) {
            if (player.username === inputUsername) {
                return true;
            } else {
                return false;
            } 
        }
    };

    isFormInValid = () => {
        return (this.state.firstname === "" || this.state.lastname === "" || this.state.username === "");
    }

    render() {
        return(
            <div>
                <div className="row m-3">
                    <div className="col-sm-8 offset-sm-2">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input className="form-control" type="text" name="firstname" 
                                            placeholder="Enter your first name" required
                                            value={ this.state.firstname } 
                                            onChange={ this.handleChange } />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input className="form-control" type="text" name="lastname" 
                                            placeholder="Enter your last name"  
                                            value={ this.state.lastname } 
                                            onChange={ this.handleChange } />
                                    </div>
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input className="form-control" type="text" name="username" 
                                            placeholder="Enter a unique username" 
                                            value={ this.state.username } 
                                            onChange={ this.handleChange } />
                                    </div>
                                    <div className="form-group">
                                        <label>Games Played:</label>
                                        <input className="form-control" type="number" defaultValue="0" 
                                            name="gamesplayed" />
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary" type="submit" disabled={ this.isFormInValid() }>Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                { (this.state.usernameExists) && ( <Error /> ) }
            </div>
        );
    }
}

export default CreatePlayer;
