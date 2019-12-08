import React from 'react';
//import logo from './logo.svg';
import './App.css';
  
class App extends React.Component {
  constructor(props) {
    super(props);
    const tasks = JSON.parse(localStorage.getItem("TASKS"));
    this.state = {
      tasks: [
        { task: 'This is the first task', isComplete: false},
        { task: 'This is the second task', isComplete: false}
      ],
      task: ''
    }
    // bind the class to each of the methods
    
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.addTaskClick = this.addTaskClick.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

  }
 
  render() {
    // I still need to save the tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    return (
      <div className="container" >
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">ToDo List</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }

  toggleTaskStatus(index) {
    /*
    this.tasks[index].isComplete = !this.tasks[index].isComplete;
    this.loadTasks();
    */
   
    // Since state is immutable:
    // 1. make a copy of state
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));

    // 2. change the copy
    tasks[index].isComplete = !tasks[index].isComplete;

    // 3. set state again.
    this.setState({tasks});
    
  
   console.log('toggleTaskStatus method');
  }

  addTaskClick() {
    /*
    let addTB = document.getElementById('addTask');
    const text = addTB.value;
    if(text == "")
        addTB.parentElement.classList.add("has-error");
    else {
        addTB.parentElement.classList.remove("has-error");
        let newTask = {
            task: text,
            isComplete: false
        };
        this.tasks.push(newTask);
        this.loadTasks();
        addTB.value = "";
    }
    */
   console.log('addTaskClick method');
  }

  deleteTask(event, index) {
    /*
    event.preventDefault();
    this.tasks.splice(index, 1);
    this.loadTasks();
    */
   console.log('deleteTask method');
  }
}

export default App;
