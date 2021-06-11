import React, { useEffect } from 'react';
import './Dashboard.css'
import AddPet from '../AddPet/AddPet';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {

    const dispatch = useDispatch();
    const owners = useSelector((store) => store.ownersReducer);
    // const pets = useSelector((store) => store.pets)

    useEffect(() => {
        dispatch({ type: 'FETCH_OWNERS' });
    }, []);

    return (
        <div>
            <AddPet />
            <h3>History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        {/* <th>Pet</th>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Checked in</th>
                        <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(owners)} */}
                    {owners &&
                        owners.map((value, i) => {
                            return (
                            <tr key={i}>
                                <td>{value.owner_name}</td>
                            </tr>)
                        })
                    }
                    {/* <tr>
                        <td>{owners.pet}</td>
                        <td>{owners.breed}</td>
                        <td>{owners.color}</td>
                        <td>{owners.checked}</td>
                        <td>{owners.actions}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;
