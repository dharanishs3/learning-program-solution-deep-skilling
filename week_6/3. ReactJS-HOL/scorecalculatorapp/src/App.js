import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Mark"}
      School={"ABC School"}
      total={473}
      goal={5}
      />

    </div>
  );
}

export default App;
