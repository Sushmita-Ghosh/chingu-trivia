import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthenticationContext from "./context/authentication";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <AuthenticationContext.Provider value={{ login, setLogin }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </AuthenticationContext.Provider>
  );
}

export default App;
