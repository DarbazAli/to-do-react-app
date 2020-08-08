import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'

const TodoList = ({onDelete, todos}) => {
    return (
        <div className="todo-list">
            {
                todos.map((item, index) => {
                    return <Todo 
                        key={index}
                        item={item}
                        id={index}
                        onDelete={onDelete}
                    />
                })
            }
        </div>
    )
}

TodoList.propTypes = {
    onDelete: PropTypes.func,
    todos: PropTypes.array
}
export default TodoList
