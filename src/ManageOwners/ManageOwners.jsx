import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux';

function ManageOwners () {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const owners = useSelector((store) => store.owners);


    useEffect(() => {
        // on page load, get list of daily hop additions from the database
        dispatch({ type: 'FETCH_OWNERS'});
      }, []) // daily

    const AddOwner = () => {
        e.preventdefault();
        console.log('in add owner', name);
        dispatch({type: 'ADD_OWNER', payload: name})
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
        <table style="width:100%">
            <tr>
                <th>Name</th>
                <th>Number of Pets</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td>{owners.name}</td>
                <td>{owners.petsNumber}</td>
                <td>{owners.actions}</td>
            </tr>
        </table>
        </>
    )
}

export default ManageOwners;