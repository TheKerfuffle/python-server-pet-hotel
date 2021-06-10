import React from 'react';
import './Dashboard.css'
import '../AddPet/AddPet';

function Dashboard() {
    const pets = useSelector((store) => store.pets)
    

    return(
        <div>
            <AddPet />
            <h3>History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Pet</th>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Checked in</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Dashboard;
