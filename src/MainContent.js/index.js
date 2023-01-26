import Container from "../Container"

const MainContent = (list) => {

    const triggerText = 'Add Task';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.status.value);
    };

    return (
            <div className="container">
                <h1 className="page-title">
                    Todo List
                </h1>
                <div className="top-row">
                    <Container triggerText={triggerText} onSubmit={onSubmit} />
                    <select name="tasklog" className="tasklog-dropdown">
                        <option value="all">All</option>
                        <option value="incomplete">Incomplete</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="content-row">
                    <div className="container">
                        <p className="empty-text">No Todos</p>
                    </div>
                    <div className="task-lists">
                        <ul className="lists-wrapper">
                            <li className="list-item">list</li>
                        </ul>
                    </div>
                </div>
            </div>
    )

}

export default MainContent
