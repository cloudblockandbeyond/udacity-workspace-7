import React, { Component } from 'react';

class PlayerList extends Component {
    render() {
        const { players, mask } = this.props;

        return(
            <div className="row m-3">
                <div className="col-sm-8 offset-sm-2">
                    <div className="table-responsive-sm">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Username</th>
                                    <th scope="col">Games Played</th>
                                </tr>
                            </thead>
                            <tbody>
                                { players.map( (player, index) => (
                                    <tr key={ index }>
                                        <td>{ player.username }</td>
                                        { (mask === "*") && ( <td>{ mask }</td> ) }
                                        { (mask !== "*") && ( <td>{ player.gamesplayed }</td> ) }
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerList;
