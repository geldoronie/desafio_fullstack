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

const TaskList: React.FC<Props> = ({ tasks, updateTask, deleteTask, patchTask }) => {

    const handleUpdate = (task: Task) => {
        console.log("handleUpdate")
        updateTask(task)
    }
    const handleHide = (task: Task) => {
        console.log("handleHide")
        task.hide = !task.hide
        patchTask(task)
    }
    const handleDone = (task: Task) => {
        console.log("handleHide")
        task.done = !task.done
        patchTask(task)
    }
    return (
        <>
            <h3>Tarefas ativas:</h3>
            <div>
            {
                tasks.length <= 0 ? 'Não existe.' :
                <div className="task_item_rows">
                { tasks.map( (task, index) => 
                    task.hide === false ?
                    <div className="clickable" key={"div_" + index}>
                        <TaskItem
                            key={"task_" + index}
                            task={task}
                            handleUpdate={handleUpdate}
                            handleDone={handleDone}
                            handleHide={handleHide}
                            handleDelete={deleteTask}
                            //handleChange={(evt) => handleChange(evt, task, index)}
                        />
                    </div>
                    :
                    null
                ) }
                </div>
            }
            </div>
            <br/>
            <hr/>
            <h3>Tarefas escondidas:</h3>
            <div>
            { tasks.map( (task, index) => 
                    task.hide === true ?
                    <div className="clickable" key={"div_" + index}>
                        <TaskItem
                            key={"task_" + index}
                            task={task}
                            handleUpdate={handleUpdate}
                            handleDone={patchTask}
                            handleHide={handleHide}
                            handleDelete={deleteTask}
                            //handleChange={(evt) => handleChange(evt, task, index)}
                        />
                    </div>
                    :
                    null
                ) }
            </div>
        </>
    )
}
 
export default TaskList