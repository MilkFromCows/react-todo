import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: 'a task from Task.js'
        }
    }

    // Add the {this.state.task} to the JSX in the render method
    // (from slide 20)
    render() {
        return (
            <div>This is the TaskForm component
                {". This.state.task = " + this.state.task}
            </div>
        )
    }
}

export default TaskForm;