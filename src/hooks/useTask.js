import { useEffect, useState } from "react";

const useTask = () => {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch('https://fast-chamber-27052.herokuapp.com/todoTask')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [tasks]);

    return [tasks];
}
export default useTask;