import React, { useState } from 'react';
import axios from 'axios';

function Registration({ handleSuccessfulAuth }) {

  const [user, setUser] = useState({ email: "", password: "", passwordConfirmation: "" });
  // const [registrationErrors, setRegistrationErrors] = useState("");


  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/registration", {
      user: {
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirmation
      }
    },
      { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registrationErrors", error);
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='Email@test.com' value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder='password' value={user.password} onChange={handleChange} required />
        <input type="password" name="passwordConfirmation" placeholder='password confirmation' value={user.passwordConfirmation} onChange={handleChange} required />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Registration
