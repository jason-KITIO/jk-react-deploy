import { useContext, useState } from "react";
import { TaskContext } from "./tastContext";

function TaskInput() {

    const [task, setTask] = useState('')
    const {dispatch} = useContext(TaskContext)

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch({ type: 'ADD_TASK', playload: task })
            setTask('');
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter the new tesk"
                value={task}
                onChange={(e) => { setTask(e.target.value) }}
            />
            <button onClick={handleAddTask}>Add task</button>
        </div>
    );
}

export default TaskInput