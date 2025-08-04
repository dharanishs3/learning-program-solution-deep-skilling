import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ["Rohit", "Rahul", "Jadeja", "Hardik", "Iyer"];
  const evenPlayers = ["Virat", "Pant", "Bumrah", "Shami", "Gill", "Surya"];

  // Destructuring
  const [p1, p2, ...restOdd] = oddPlayers;
  const [q1, q2, ...restEven] = evenPlayers;

  // Merge feature of ES6 using spread operator
  const T20Players = ["Kohli", "Rohit"];
  const RanjiPlayers = ["Ruturaj", "Sarfaraz"];
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {[p1, p2, ...restOdd].map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {[q1, q2, ...restEven].map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

