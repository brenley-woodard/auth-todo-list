import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function Tasks() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}
