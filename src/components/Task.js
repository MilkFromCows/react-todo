import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    render() {
        return (
            <div>This is the Task component
                {/*
                <li className="list-group-item checkbox">
                <div className="row">
                <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                    <label><input id="toggleTaskStatus" type="checkbox" value="" 
                    className="" {this.props.task.isComplete ? "checked" : ""}
                    onChange=toDo.toggleTaskStatus({this.props.index})></label>
                </div>
                <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text {task.isComplete? "complete" : ""}">
                    {task.task}
                </div>
                <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                    <a className="" href="/" onClick="toDo.deleteTask(event, {index})">
                    <i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i></a>
                </div>
                </div>
                </li> 

                */}
            </div>
        )
    }
}

export default Task;