import React from 'react';

const Toggle = (props) => {
    const { title, onToggle} = props;

    const element = (
        <div className="row m-3">
            <div className="col-sm-8 offset-sm-2">
                <button className="btn btn-primary btn-lg btn-block" type="button" onClick={ () => { onToggle(title) } }>
                    { `${ title } the Number of Games Played` }
                </button>
            </div>
        </div>
    );

    return element;
};

export default Toggle;
