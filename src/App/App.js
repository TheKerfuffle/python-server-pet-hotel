import AddPet from '../AddPet/AddPet'

import { Route, Router } from 'react-router';

import './App.css';
import Dashboard from './Dashbaord/Dashboard';

function App() {
  return (
    <div className="App">
      <AddPet />
      <Dashboard />
    </div>
  );
}

export default App;
