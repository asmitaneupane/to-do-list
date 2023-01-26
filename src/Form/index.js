import { useState } from 'react'

const Form = ({ onSubmit }) => {

    const [list, setList] = useState()

    const handleClick = () => {
        setList();
    }


    return (
        <form onSubmit={onSubmit}>
            <h3 className="form-title">Add Todo</h3>
            <div className="form-group">
                <label htmlFor="name">Title
                    <input className="form-control" id="name" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status
                    <select name="add-task-status" className="add-task-status">
                        <option value="Incomplete">Incomplete</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label>
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit" onClick={handleClick}>
                    Add Task
                </button>
                <button className="form-control btn btn-cancel" type="reset">
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default Form