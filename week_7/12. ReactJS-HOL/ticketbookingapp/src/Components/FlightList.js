import React from 'react';

const flights = [
  { id: 1, from: 'Chennai', to: 'Delhi', time: '10:30 AM', price: '₹4500' },
  { id: 2, from: 'Mumbai', to: 'Kolkata', time: '01:15 PM', price: '₹5200' },
  { id: 3, from: 'Bangalore', to: 'Hyderabad', time: '03:45 PM', price: '₹3200' },
];

function FlightList() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Available Flights</h3>
      <table border="1" style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightList;
