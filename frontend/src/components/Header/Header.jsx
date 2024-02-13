import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AuthenticationContext from "../../context/authentication";

const Header = () => {
  const { login } = useContext(AuthenticationContext);
  const user = localStorage.getItem("user");

  return (
    <div className="header">
      <Link className="link" to="/">
        <h1>Chingu Trivia</h1>
      </Link>
      {login ? (
        <Link className="link" to="/login">
          <h1>{JSON.parse(user).username}</h1>
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
