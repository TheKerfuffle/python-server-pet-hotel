import React from 'react';
import './Dashboard.css'

function Dashboard() {
    

    return(
        <div>
            <h2>Dashboard</h2>
            <br />
            <div>
                <h3>Add Pet</h3>
                    <input placeholder="Pet Name" type="text"/>
                    <input placeholder="Pet Color" type="text"/>
                    <input placeholder="Pet Breed" type="text"/>
                    <select>
                        <option>Owner Name</option>
                    </select>
                    <button>Submit</button>
            </div>
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
