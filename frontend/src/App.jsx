import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";
import AuthContext from "./context/authentication";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
