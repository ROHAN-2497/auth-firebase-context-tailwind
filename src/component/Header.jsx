import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/order">
          Orders
        </Link>
        {user && <Link className="btn btn-ghost normal-case text-xl" to="/uspro">
          UserProfile
        </Link>}


        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <>
            <small>{user.email}</small>
            <button onClick={handleLogut} className="btn btn-xs">
              SignOut
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
