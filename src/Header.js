import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const element = (
        <div className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand mr-auto" to={() => ({ pathname: "/"})}>Video Game</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={() => ({ pathname: "/create" })}>Create Player</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={() => ({ pathname: "/scoreboard" })}>Scoreboard</Link>
                </li>
            </ul>
        </div>
    );

    return element;
};

export default Header;
