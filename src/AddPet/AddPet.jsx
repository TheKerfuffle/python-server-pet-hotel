import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
// import { generatePath } from 'react-router';
// import Dashboard from '../Dashbaord/Dashboard';

function AddPet() {
    const dispatch = useDispatch();
    const owners = useSelector((store) => store.ownersReducer)

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [breed, setBreed] = useState('');
    const [ownerId, setOwnerId] = useState('');

    const newPet = {
        name: name,
        color: color,
        breed: breed,
        owner: ownerId
    }

    const clearFields = () => {
        setColor('');
        setName('');
        setBreed('');
        setOwnerId('');
    }

    const sendPet = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_NEW_PET', payload: newPet})
        clearFields();
    }
    return (
        <div>
            <form>
                <input onChange={(event) => setName(event.target.value)} value={name} placeholder="Pet Name"></input>
                <input onChange={(event) => setColor(event.target.value)} value={color} placeholder="Pet Color"></input>
                <input onChange={(event) => setBreed(event.target.value)} value={breed} placeholder="Pet Breed"></input>
                <select value={owners.id} name='ownerId' onChange={(event) => setOwnerId(event.target.value)}>
                    {owners.map(owner => {
                        return <option key={owner.id} value={owner.id}>{owner.name}</option>
                    })}
                </select>
                <button onClick={sendPet}>Submit</button>
            </form>
        </div>
    )
}

export default AddPet;