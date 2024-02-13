import "./LoginForm.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BACKEND_URL } from "../../constants/config";
import { useContext } from "react";
import AuthenticationContext from "../../context/authentication";

const LoginForm = ({ setLoginTab, email, setEmail, password, setPassword }) => {
  const navigate = useNavigate();

  const { setLogin } = useContext(AuthenticationContext);

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", data.token);

      // getting the user from local storage
      const user = localStorage.getItem("user");

      // saving the user in local storage
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: JSON.parse(user).username,
          email: email,
        })
      );
      setLogin(true);

      toast("🌻 Logged In Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <ToastContainer
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          width: "500px",
        }}
      />
      <h2>Login</h2>
      <div className="input-div">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-div">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="signup-button" type="submit" onClick={handleLogin}>
        Submit
      </button>

      <p>
        Don&apos;t have an account?{" "}
        <span className="login-link" onClick={() => setLoginTab(false)}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

LoginForm.propTypes = {
  setLoginTab: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginForm;
