import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitAuth = async () => {
    //todo
  };

  return (
    <>
      <div>
        <NavLink to="/auth/sign-in">
        Sign In
        </NavLink>
        <NavLink to="/auth/sign-up">
        Sign Up
        </NavLink>
      </div>
      <div>
        <form>
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
          <button onClick={submitAuth}>
          Submit
          </button>
        </form>
      </div>
    </>
  );
}
