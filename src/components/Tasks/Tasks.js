import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function Tasks() {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}
