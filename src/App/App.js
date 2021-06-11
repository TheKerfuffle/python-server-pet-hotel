// import AddPet from '../AddPet/AddPet'
import {useState} from 'react';
import './App.css';

import ManageOwners from '../ManageOwners/ManageOwners';

import './App.css';
import Dashboard from '../Dashbaord/Dashboard';



function App() {
    const [dashboardView, setDashboardView] = useState(true);

    const handleDashboard = () => {
      setDashboardView(true)
    }

    const handleManageOwners = () => {
      setDashboardView(false)
    }


  return (
    <div className="App"> 
      <button onClick={handleDashboard}>Dashboard</button>
      <button onClick={handleManageOwners}>Manage Owners</button>
      {dashboardView ?
      <Dashboard />
      :
      <ManageOwners />
      }
    </div>
  );
}

export default App;
