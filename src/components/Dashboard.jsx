import React from "react";

function Dashboard({ loggedInStatus }) {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h1>Status : {loggedInStatus}</h1>
      </div>
    </div>
  )
}

export default Dashboard
