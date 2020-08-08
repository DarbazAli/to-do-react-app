import React from 'react'
import PropTypes from 'prop-types';

const Todo = ({item, onDelete, id}) => {
    return (
        <div className="list-item">
            <p>{item}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

Todo.propTypes = {
    item: PropTypes.string,
    onDelete: PropTypes.func,
    id: PropTypes.number
}
export default Todo
