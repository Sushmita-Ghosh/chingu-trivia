import React, { useState } from "react";
import "./Authentication.css";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import AuthContext from "../../context/authentication";

const Authentication = () => {
  const { setLogin } = React.useContext(AuthContext);
  const [loginTab, setLoginTab] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login-container">
      <div>
        {loginTab ? (
          <LoginForm
            setLogin={setLogin}
            setLoginTab={setLoginTab}
            username={username}
            password={password}
            email={email}
            setUsername={setUsername}
            setPassword={setPassword}
            setEmail={setEmail}
          />
        ) : (
          <SignUpForm
            setLogin={setLogin}
            setLoginTab={setLoginTab}
            username={username}
            password={password}
            email={email}
            setUsername={setUsername}
            setPassword={setPassword}
            setEmail={setEmail}
          />
        )}
      </div>
    </div>
  );
};

export default Authentication;
