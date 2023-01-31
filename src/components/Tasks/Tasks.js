import React from 'react';
import Header from '../Header/Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function Tasks() {
  return (
    <div>
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
}
