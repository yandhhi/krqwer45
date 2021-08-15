import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super();
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);

    this.state = {
      tasks: [
        { id: 1, name: 'Sacar la ropa', done: false },
        { id: 2, name: 'Hacer la cama', done: true },
        { id: 3, name: 'Leer un rato', done: false },
      ],
      newTask: '',
      empty: false,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => (
              <li key={task.id} className={task.done === true ? 'done' : null}>
                {task.name}
              </li>
            ))}
          </ul>
          <form onSubmit={this.addTask}>
            <input
              type="text"
              id="new-task"
              className={this.state.empty ? 'error' : null}
              onChange={this.updateTask}
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.newTask}
            />
          </form>
        </div>
      </div>
    );
  }

  addTask(event) {
    event.preventDefault();
    if (this.state.newTask === '')
      this.setState({
        empty: true,
      });
    else
      this.setState({
        tasks: this.state.tasks.concat({
          id: this.state.tasks.length + 1,
          name: this.state.newTask,
          done: false,
        }),
        newTask: '',
        empty: false,
      });
  }

  updateTask(event) {
    this.setState({
      newTask: event.target.value,
    });
  }
}

export default App;
