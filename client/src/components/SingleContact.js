import React from 'react';
/* stateless component */
const SingleContact = ({item}) => (

    <div className="row">
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{item.firstName} {item.lastName}</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <p>{item.email}</p>
                </div>
            </div>
        </div>
    </div>

);

export default SingleContact;