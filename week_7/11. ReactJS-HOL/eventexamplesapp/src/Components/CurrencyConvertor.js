// src/CurrencyConvertor.js
import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    const conversionRate = 0.011; // Example: 1 INR = 0.011 EUR
    const converted = parseFloat(rupees) * conversionRate;
    setEuros(converted.toFixed(2));
  };

  return (
    <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #ccc' }}>
      <h2 style={{color:'green'}}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euros !== null && (
        <p>
          <strong>{rupees} INR</strong> = <strong>{euros} EUR</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
