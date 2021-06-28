import React from 'react';

const Error = () => {
    const element = (
        <div className="row m-3">
            <div className="col-sm-8 offset-sm-2">
                <div className="alert alert-danger text-center" role="alert">
                    Username already exists. Please select a unique username.
                </div>
            </div>
        </div>
    );

    return element;
};

export default Error;
