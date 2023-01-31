import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import Header from '../Header/Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function Tasks() {
  const { user } = useUser();
  console.log(user);
  (!user) && <Redirect to="/auth/sign-in" />;

  // const handleLogout = async () => {
  //   try {
  //     console.log('hello');
  //     await signOut();
  //     setUser(null);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  return (
    <div>
      {/* <Header handleLogout={handleLogout}/> */}
      <TaskForm />
      <TaskList />
    </div>
  );
}
