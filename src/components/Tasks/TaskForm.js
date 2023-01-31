import React, { useState, useContext } from 'react';
import { createTasks } from '../../services/tasks';
import { TasksContext } from '../../context/TasksContext';

export default function TaskForm() {
  //todo is the name/description
  //tasks is the name of the whole list
  // const [todo, setTodo] = useState('');
  // const { setTasks } = useContext(TasksContext);

  // const handleNewTodo = async () => {
  //   try {
  //     const task = await createTasks(todo);
  //     setTasks((prev) => [...prev, task]);
  //     setTodo('');
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="new todo..."
          // value={todo}
          // onChange={(e) => setTodo(e.target.value)}
        />
        <button>
        Add
        </button>
      </form>
    </div>
  );
}
