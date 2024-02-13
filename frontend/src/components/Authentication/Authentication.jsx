import { useState } from "react";
import "./Authentication.css";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";

const Authentication = () => {
  const [loginTab, setLoginTab] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login-container">
      <div>
        {loginTab ? (
          <LoginForm
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
