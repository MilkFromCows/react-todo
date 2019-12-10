import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            
            <div className = "container">  
                This is the TaskList component
                <ul className="list-group" id="taskList">
                    <Task task={ this.props.tasks[0] } 
                          index={ this.props.index } 
                          toggleTaskStatus={ this.props.toggleTaskStatus } 
                          deleteTask={ this.props.deleteTask } 
                          isComplete="false" />
                </ul>
            </div>
        )
    }
}

export default TaskList;