import React from 'react';

const players = [
  { name: "Rohit", score: 75 },
  { name: "Virat", score: 50 },
  { name: "Rahul", score: 65 },
  { name: "Pant", score: 80 },
  { name: "Jadeja", score: 90 },
  { name: "Bumrah", score: 45 },
  { name: "Shami", score: 60 },
  { name: "Hardik", score: 85 },
  { name: "Gill", score: 95 },
  { name: "Iyer", score: 40 },
  { name: "Surya", score: 55 },
];

const ListOfPlayers = () => {
  const below70 = players.filter(player => player.score < 70); // Arrow function

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players Scored Below 70</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
