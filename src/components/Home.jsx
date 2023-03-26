import React from "react";
import Registration from "./auth/Registration";

function Home({ loggedInStatus }) {
  return (
    <div>
      <h1>Home</h1>
      <h1>Status : {loggedInStatus}</h1>
      <Registration />
    </div>
  )
}


export default Home
