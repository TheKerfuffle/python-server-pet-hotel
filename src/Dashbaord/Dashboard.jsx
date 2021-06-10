import React, { useEffect } from 'react';
import './Dashboard.css'
import '../AddPet/AddPet';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {

    const dispatch = useDispatch();
    const owners = useSelector((store) => store.owner);
    const pets = useSelector((store) => store.pets)

    useEffect(() => {
        dispatch({type:'FETCH_OWNERS'});
    }, []);

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
                    <tr>
                        <td>{owners.name}</td>
                        <td>{owners.pet}</td>
                        <td>{owners.breed}</td>
                        <td>{owners.color}</td>
                        <td>{owners.checked}</td>
                        <td>{owners.actions}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Dashboard;
