import React from 'react'
import PropTypes from 'prop-types';

const Header = ({length}) => {
    return (
        <div className="header">
            <p>You have <b>{length}</b> todos</p>
        </div>
    )
}

Header.propTypes = {
    length: PropTypes.number
}

export default Header
