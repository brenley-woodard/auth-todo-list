import React, { useState, useContext } from 'react';
import { createTasks } from '../../services/tasks';
import { TasksContext } from '../../context/TasksContext';
import { getUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';

export default function TaskForm() {
  //todo is the name/description
  //tasks is the name of the whole list
  const [todo, setTodo] = useState('');
  const { setTasks } = useContext(TasksContext);
  const { user } = useUser();

  const handleNewTodo = async (e) => {
    e.preventDefault();
    try {
      const task = await createTasks(user, todo);
      setTasks((prev) => [...prev, task]);
      setTodo('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleNewTodo}>
        <input
          type="text"
          placeholder="new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>
        Add
        </button>
      </form>
    </div>
  );
}
