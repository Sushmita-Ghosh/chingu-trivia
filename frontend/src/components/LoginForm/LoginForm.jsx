import "./LoginForm.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = ({
  setLogin,
  setLoginTab,
  email,
  setEmail,
  password,
  setPassword,
  username,
}) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/user/login",
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

      toast("🌻 Logged In Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLogin(true);

      localStorage.setItem("token", data.token);

      //saving the user in local storage
      localStorage.setItem(
        "user",
        JSON.stringify({
          data: {
            username: username,
            email: email,
          },
        })
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
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

      <ToastContainer
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          width: "500px",
        }}
      />
    </div>
  );
};

LoginForm.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setLoginTab: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default LoginForm;
