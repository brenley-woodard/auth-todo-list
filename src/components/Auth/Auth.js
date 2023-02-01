import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { authUser } from '../../services/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();

  if (user) {
    return <Redirect to="/tasks" />;
  }
  
  const submitAuth = async (e) => {
    e.preventDefault();
    // console.log('email', email, password);
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
      // console.log('user', user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitAuth}>
          <label>Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>
          Submit
          </button>
        </form>
      </div>
    </>
  );
}
