import React from 'react';
import { toast } from 'react-toastify';

const Task = ({ task }) => {
    const { _id, taskName, taskDescription } = task;

    const handleDelete = (_id) => {
        const url = `https://fast-chamber-27052.herokuapp.com/todoTask/${_id}`;
        const sure = window.confirm('Are you sure!! You want to delete?')
        if (sure) {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Deleted successful');
                    }
                    console.log(data);
                })
        }
        else {
            toast('Not Delete')
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10px', border: '1px solid tomato', marginTop: '10px', paddingLeft: '5px', borderRadius: '5px' }}>
            <div>
                <h3>Task Name: {taskName}</h3>
                <p>description: {taskDescription}</p>
            </div>
            <div>
                <button
                    onClick={() => handleDelete(_id)}
                    style={{ backgroundColor: 'red', border: 'none', padding: '6px 12px', color: 'white', cursor: 'pointer', borderRadius: '5px' }}>Delete</button>
            </div>
        </div>
    );
};

export default Task;