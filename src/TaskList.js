import { useContext } from "react";
import { TaskContext } from "./tastContext";

function TaskList() {
    const { state, dispatch } = useContext(TaskContext)
    const { tasks } = state

    return (
        <ul>
            {tasks.length === 0 ? (
                <p>Aucune tache</p>
            ) : (
                tasks.map((task, index) => {
                    return (
                        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            <input type="checkbox"
                                checked={task.completed}
                                onChange={() => { dispatch({ type: 'TOGGLE_TASK', playload: index }) }} />
                            {task.texte}
                            <button
                                onClick={() => { dispatch({ type: 'REMOVE_TASK', playload: index }) }}
                            >Delete</button>
                        </li>
                    )
                })
            )
            }
        </ul>
    );
}

export default TaskList;

