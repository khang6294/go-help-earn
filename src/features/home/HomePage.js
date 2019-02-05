import React from 'react';

const HomePage = ({history}) => {
    return (
        <>
        <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui text container">
            <h1 className="ui inverted stackable header">
                <div className="content">GoHelpEarn</div>
            </h1>
            <h2>Go Help People And Earn Yourself</h2>
            <div onClick={() => history.push('/works')} className="ui huge white inverted button">
                Get Started
                <i className="right arrow icon" />
            </div>
            </div>
        </div>
        </>
    );
};

export default HomePage;
