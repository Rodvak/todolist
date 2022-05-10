import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import TodoForm from './components/TodoForm';

function App() {

  const [tasks, setTasks] = useState([]);

  const handleAdd = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleCheck = (index) => {
    const newTasks = tasks.map((task,i) => {if (index === i) { 
      
      return {...task, checked: !task.checked}
    }else {
      return task
    }})
    setTasks(newTasks)
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task,i) => {
      if (index !== i) {
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <TodoForm handleAdd = {handleAdd}/>
      <Display tasks = {tasks} handleCheck = {handleCheck} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
