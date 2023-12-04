import { useState } from 'react'
import './App.css'


class TodoTask {
  static _count = 0;

  /**
   * Creates a new TodoTask object
   *
   * @constructor
   * @param {string} title What to do
   * @param {boolean} completed Whether it's done already
   * @param {function(number):void} onDelete The callback for deleting this task
   * @param {function(TodoTask):void} onUpdate The callback for updating this task
   */
  constructor(title, completed, onDelete, onUpdate) {
    this.id = ++TodoTask._count;
    console.log(this.id, title)

    this.title = title;
    this.completed = completed;
    this.delete = () => onDelete(this.id);
    this.update = () => onUpdate(this);
  }

  check = () => {
    this.completed = !this.completed;
    this.update();
  };

  render = () => (
    <div key={this.id} className="task">
      <p style={{textDecoration: this.completed ? "line-through" : "none"}}>{this.title}</p>
      <input
        type="checkbox"
        name="completed"
        onChange={() => this.check()}
        checked={this.completed ? "true" : undefined}
      />
      <button onClick={() => this.delete()}>X</button>
    </div>
  );
}


function App() {
  const [_t, setTasks] = useState([]);
  const tasks = /** @type {TodoTask[]} */ (_t);

  /**
   * Form onSubmit handler
   *
   * @param {SubmitEvent} ev
   */
  function formSubmitHandler(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { task } = Object.fromEntries(formData.entries());
    const newTask = new TodoTask(task, false, deleteTask, updateTask)
    setTasks([...tasks, newTask]);
    ev.target.reset();
  }

  /**
   * Remove task with :id from the list
   *
   * @param {number} id
   */
  function deleteTask(id) {
    setTasks((tasks) => tasks.filter(task => task.id !== id));
  };

  /**
   * Update the :task in the list
   *
   * @param {TodoTask} task
   */
  function updateTask(task) {
    setTasks((tasks) => [...tasks]);
  }

  return (
    <>
      <h1>Todo list!!!!!</h1>
      { tasks.map(task => task.render()) }
      <form onSubmit={formSubmitHandler}>
        <label>Task: <input type="text" name="task" /></label>
        <button>Add task</button>
      </form>
    </>
  )
}

export default App
