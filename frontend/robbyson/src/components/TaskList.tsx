import React from 'react'
import TaskItem from './TaskItem'
import { Task } from '../types/Types'
 
type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    updateTask: (task: Task) => void
    deleteTask: (task: Task) => void
    patchTask: (task: Task) => void
}

const TaskList: React.FC<Props> = ({ tasks, setTasks, updateTask, deleteTask, patchTask }) => {

    const handleChange = (e: any, task: Task, index: number) => {
        console.log("handleChange " + e.currentTarget.value);
        task.description = e.currentTarget.value
        tasks[index] = task
        console.log(tasks)
        setTasks(tasks)
    };


    const handleUpdate = (task: Task) => {
        console.log("handleUpdate")
        updateTask(task)
    }
    return (
        <>
            <div>
            {
                tasks.length <= 0 ? 'Não existe.' :
                <div className="task_item_rows">
                { tasks.map( (task, index) => 
                    <div className="clickable" key={"div_" + index}>
                        <TaskItem
                            key={"task_" + index}
                            task={task}
                            handleUpdate={handleUpdate}
                            handleDone={patchTask}
                            handleHide={patchTask}
                            handleDelete={deleteTask}
                            //handleChange={(evt) => handleChange(evt, task, index)}
                        />
                    </div>
                ) }
                </div>
            }
            </div>
        </>
    )
}
 
export default TaskList