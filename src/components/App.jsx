import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import '../stylesheet/App.css';

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedInStatus={loggedInStatus} />} />
          <Route path="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
