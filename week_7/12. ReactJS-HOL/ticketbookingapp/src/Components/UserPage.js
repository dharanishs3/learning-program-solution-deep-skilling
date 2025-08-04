import React from 'react';
import FlightList from './FlightList';

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <button onClick={onLogout}>Logout</button>
      <FlightList />
    </div>
  );
}

export default UserPage;
