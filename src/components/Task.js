import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //"task": this.props.task,
            //"index": this.props.index
        }
        
        console.log(this.props);
    }

    render() {
        /*  From generateTaskHtml(task, index). Lab 2:
            
                <li class="list-group-item checkbox">
            <div class="row">
              <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" value="" 
                class="" ${task.isComplete? "checked" : ""}
                onchange=toDo.toggleTaskStatus(${index})></label>
              </div>
              <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete? "complete" : ""}">
                ${task.task}
              </div>
              <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a class="" href="/" onclick="toDo.deleteTask(event, ${index})">
                <i id="deleteTask" class="delete-icon glyphicon glyphicon-trash"></i></a>
              </div>
            </div>
          </li>
            
            */

        // I still need to pass task and index to the component when it is created
        // They can be retrieved from this.props
        // The event handlers will also be in this.props
        return (
            
            <div className="container">This is the Task component
                <li className="list-group-item checkbox">
                    <div className="row">
                        <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                            <label><input id="toggleTaskStatus" type="checkbox" value="" 
                            className="" 
                           
                            />
                            </label>
                        </div>
                        <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text">
                            { this.props.task.task }
                        </div>
                        <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                            <a className="" href="/" >
                            <i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i></a>
                        </div>
                    </div>
                </li>
                 
            </div>
        )
    }
}

export default Task;