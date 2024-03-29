import "./SignUpForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import { BACKEND_URL } from "../../constants/config";
import { useContext } from "react";
import AuthenticationContext from "../../context/authentication";

const SignUpForm = ({
  setLoginTab,
  username,
  password,
  email,
  setUsername,
  setPassword,
  setEmail,
}) => {
  const navigate = useNavigate();

  const { setLogin } = useContext(AuthenticationContext);

  const handleSignUp = async () => {
    // since we are sendung json data, we need to set the content type to json
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/user`,
        {
          username,
          password,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //saving the token in local storage
      localStorage.setItem("token", data.token);
      // saving the user in local storage
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: username,
          email: email,
        })
      );
      setLogin(true);

      toast("🌻 Signed Up Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
        title: "Signed Up Successfully!",
        closeButton: false,
      });

      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="signup-form">
      <ToastContainer
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          width: "500px",
        }}
      />
      <h2>Sign Up</h2>
      <div className="input-div">
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

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

      <button className="signup-button" type="submit" onClick={handleSignUp}>
        Submit
      </button>

      <p>
        Already have an account?{" "}
        <span className="login-link" onClick={() => setLoginTab(true)}>
          Login
        </span>
      </p>
    </div>
  );
};

SignUpForm.propTypes = {
  setLoginTab: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default SignUpForm;
