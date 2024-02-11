import React from "react";
import AuthContext from "../../context/authentication";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { login } = React.useContext(AuthContext);
  const user = localStorage.getItem("user");

  return (
    <div className="header">
      <Link className="link" to="/">
        <h1>Chingu Trivia</h1>
      </Link>
      {user ? (
        <Link className="link" to="/login">
          <h1>{JSON.parse(user).data.username}</h1>
        </Link>
      ) : (
        <Link className="link" to="/login">
          <h1>Login/Signup</h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
