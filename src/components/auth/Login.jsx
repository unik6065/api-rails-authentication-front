import React, { useState } from 'react';
import axios from 'axios';

function Login({ handleSuccessfulAuth }) {

  const [user, setUser] = useState({ email: "", password: "" });
  // const [LoginErrors, setLoginErrors] = useState("");


  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/sessions", {
      user: {
        email: user.email,
        password: user.password
      }
    },
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("LoginErrors", error);
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='Email@test.com' value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder='password' value={user.password} onChange={handleChange} required />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
