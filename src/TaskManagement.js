import './TaskManagement.css'
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { useState } from "react";
import { TaskProvider } from './tastContext';

function TaskManagement() {
    return (
        <TaskProvider>
            <div>
                <TaskInput />
                <TaskList />
            </div>
        </TaskProvider>
    );
};

export default TaskManagement