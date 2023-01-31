import React from 'react';
import { signOut } from '../../services/auth';
import { useUser } from '../../context/UserContext';

export default function Header({ handleLogout }) {
  // const { user } = useUser();

  return (
    <div>
      <h4>hello</h4>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}
