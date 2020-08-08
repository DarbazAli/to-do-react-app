import React from 'react'

const Header = ({length}) => {
    return (
        <h4 className="header">You have {length || 0} Todos</h4>
    )
}

export default Header
