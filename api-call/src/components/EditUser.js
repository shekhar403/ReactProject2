import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiRead, apiUpdate } from '../services/fetch-api-services';
import { useNavigate } from 'react-router-dom';

function EditUser() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [color, setColor] = useState("");
    let [data, setData] = useState([]);
    const { updateId } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        apiRead(setData)
    }, [])
    useEffect(() => {
        if (data.filter((item) => (item._id === updateId))[0] !== undefined) {
            setName(data.filter((item) => (item._id === updateId))[0].name)
            setAge(data.filter((item) => (item._id === updateId))[0].age)
            setColor(data.filter((item) => (item._id === updateId))[0].colour)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h1>Edit User Details</h1>
            <form>
                <input type='text' placeholder='name' onChange={(e) => { setName(e.target.value) }} value={name} />
                <br></br><br></br>
                <input type='text' placeholder='age' onChange={(e) => { setAge(e.target.value) }} value={age} />
                <br></br><br></br>
                <input type='text' placeholder='color' onChange={(e) => { setColor(e.target.value) }} value={color} />
                <br></br><br></br>
                <button type='submit' onClick={(e) => {
                    e.preventDefault();
                    apiUpdate(updateId, name, age, color)
                        .then(() => {
                            navigate("/users")
                        });
                }} >{"Edit"}</button>
            </form>
        </div>
    )
}

export default EditUser