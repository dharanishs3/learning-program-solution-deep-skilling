import logo from './logo.svg';
import './App.css';
import ListOfPlayers from './Components/ListOfPlayers';
import IndianPlayers from './Components/ IndianPlayers';

function App() {
  const flag = false; // Toggle to false to test IndianPlayers

  return (
    <div className="App">
      <h1>Cricket App</h1>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
