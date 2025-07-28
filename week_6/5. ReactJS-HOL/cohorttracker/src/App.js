import logo from './logo.svg';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'React Basics',
      startDate: '2024-01-10',
      endDate: '2024-03-15',
      status: 'completed',
    },
    {
      name: 'Advanced React',
      startDate: '2024-04-01',
      endDate: '2024-06-01',
      status: 'ongoing',
    },
    {
      name: 'Fullstack Bootcamp',
      startDate: '2024-06-15',
      endDate: '2024-08-15',
      status: 'completed',
    },
  ];

  return (
    <div>
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
