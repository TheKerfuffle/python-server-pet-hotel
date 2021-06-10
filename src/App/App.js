

// import logo from './logo.svg';
import { Route, Router } from 'react-router';

import './App.css';
import Dashboard from '../Dashbaord/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners'

function App() {
  return (
    <div className="App">

      <Dashboard />
      <ManageOwners />
    </div>
  );
}

export default App;
