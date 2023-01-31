import React from 'react';
import { signOut } from '../../services/auth';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user, setUser } = useUser();

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
      {!user && (
        <div className="buttons">
          <Link className="button is-primary" to="/auth/sign-up">
            <strong>Sign up</strong>
          </Link>
          <Link className="button is-light" to="/auth/sign-in">
            <strong>Sign in</strong>
          </Link>
        </div>
      )}
      {user && (
        <>
          <div>hello {user.email}</div>
          <button className="button is-light" onClick={handleLogout}>
                  Sign Out
          </button>
        </>
      )}
    </div>
  );
}
