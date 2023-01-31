import React from 'react';
import { signOut } from '../../services/auth';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <h4>hello</h4>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}
