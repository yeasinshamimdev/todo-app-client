import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useTask from '../../hooks/useTask';
import Task from './Task';

const ToDoList = () => {
    const { register, handleSubmit, reset } = useForm();

    const [tasks] = useTask();

    const onSubmit = data => {
        console.log(data)
        fetch('https://fast-chamber-27052.herokuapp.com/todoTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(taskData => {
                toast.success('Task Add SuccessFull');
                reset();
            })
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>To Do List</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form
                    style={{ display: 'flex', justifyContent: 'center' }}
                    onSubmit={handleSubmit(onSubmit)} >
                    <input
                        style={{ height: '30px', fontSize: '16px', marginBottom: '20px' }}
                        {...register("taskName", { required: true })} placeholder="task name"
                    />

                    <input
                        style={{ height: '30px', fontSize: '16px', marginBottom: '20px' }}
                        {...register("taskDescription", { required: true })} placeholder="task description"
                    />
                    <input
                        style={{ height: '30px', fontSize: '16px', marginBottom: '20px', marginLeft: '5px', backgroundColor: 'orange', border: 'none', borderRadius: '5px', marginTop: '3px', color: 'white', padding: '5px 10px' }}
                        type="submit" value="Add Task"
                    />
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={() => toast.success('Task has been complete')}
                    style={{ backgroundColor: 'orange', border: 'none', padding: '6px 12px', color: 'white', cursor: 'pointer', borderRadius: '5px' }}>Task Complete</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', width: '60%', margin: 'auto', padding: '2px' }}>
                {
                    tasks.length === 0 && <p>Please wait!! Task List is loading...</p>
                }
                {
                    tasks.map(task => <Task key={task._id}
                        task={task}
                    />)
                }
            </div>
        </div>
    );
};

export default ToDoList;