import React, {useState} from 'react';
import PropTypes from 'prop-types';


const SubmitForm = ({onFormSubmit}) => {
    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if ( task === '' ) return;
        onFormSubmit(task);
        setTask('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter todo"
                value={task}
                onChange={ e => setTask(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}

SubmitForm.propTypes = {
    onFormSubmit: PropTypes.func
}
export default SubmitForm
