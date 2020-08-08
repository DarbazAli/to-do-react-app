import React from 'react'

const Header = ({length}) => {
    return (
        <div className="header">
            <p>You have <b>{length}</b> todos</p>
        </div>
    )
}

export default Header
