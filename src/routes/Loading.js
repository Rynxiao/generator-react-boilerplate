import React from 'react';
import PropTypes from 'prop-types';

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return null;
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }

    return null;
};

MyLoadingComponent.displayName = 'MyLoadingComponent';
MyLoadingComponent.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.shape({})
};

export default MyLoadingComponent;
