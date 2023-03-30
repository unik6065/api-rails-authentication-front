import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import '../stylesheet/App.css';
import axios from "axios";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [user, setUser] = useState({})

  axios.defaults.baseURL = "http://localhost:3000/"

  function checkLoginStatus() {
    axios.get("/logged_in",
      { withCredentials: true }
    )
      .then(response => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN");
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN");
          setUser({})
        }
      })
      .catch(error => {
        console.log("login error", error)
      })
  }

  useEffect(() => {
    checkLoginStatus();
  })

  function handleLogout() {
    setLoggedInStatus("NOT_LOGGED_IN");
    setUser({});
  }

  function handleLogin(data) {
    setUser(data.user);
    setLoggedInStatus("LOGGED_IN");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} handleLogout={handleLogout} />} />
          <Route path="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
