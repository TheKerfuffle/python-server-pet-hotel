import AddPet from '../AddPet/AddPet'
import react, {useState} from 'react';
import './App.css';

import ManageOwners from '../ManageOwners/ManageOwners';


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
      <AddPet />
      :
      <ManageOwners />
      }
    </div>
  );
}

export default App;
