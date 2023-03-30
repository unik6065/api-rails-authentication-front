import React from "react";
import { useNavigate } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from "axios";

function Home({ loggedInStatus, handleLogin, handleLogout }) {
  const navigate = useNavigate();

  function handleSuccessfulAuth(data) {
    handleLogin(data);
    navigate("/dashboard");
  }

  function handleLogoutClick() {
    axios.delete("/logout",
      { withCredentials: true })
      .then(() => {
        handleLogout();
      })
      .catch(error => {
        console.log("logout error", error)
      })

  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Status : {loggedInStatus}</h1>
      <button onClick={handleLogoutClick}>Log out</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  )
}


export default Home
