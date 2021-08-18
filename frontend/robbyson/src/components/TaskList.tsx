import React from 'react'
import TaskItem from './TaskItem'
import { Task } from '../types/Types'
 
type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    
    const handleChange = (e: any, task: Task) => {
        console.log("handleChange " + e.currentTarget.value);
        task.description = e.currentTarget.value
        setTasks(tasks)
    };

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
                            handleUpdate={()=>console.log("update")}
                            handleDone={()=>console.log("done")}
                            handleHide={()=>console.log("hide")}
                            handleDelete={()=>console.log("handleDelete")}
                            handleChange={handleChange}
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