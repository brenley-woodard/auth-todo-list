import React from 'react';

export default function TaskForm() {
  const [todo, setTodo] = useState('');
  const { setTasks } = useContext(TasksContext);

  return (
    <div>TaskForm</div>
  );
}
