import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

function ManageOwners() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const owners = useSelector((store) => store.ownersReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_OWNERS' });
    }, [])

    const AddOwner = (e) => {
        e.preventdefault();
        console.log('in add owner', name);
        dispatch({ type: 'ADD_OWNER', payload: name })
        setName('')
    }

    return (
        <>
            <form onSubmit={AddOwner}>
                <h3>Add Owner</h3>
                <input
                    type="text"
                    placeholder="Owner name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
            </form>

            <h3>Owners</h3>
            <table style={{width: "100%"}}>
                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Number of Pets</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {owners.map((value, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    <td>{value.owner_name}</td>
                                    <td>{value.id}</td>
                                </tr>
                            </>
                        )
                    }
                    )}


                </tbody>
            </table>
        </>
    )
}

export default ManageOwners;