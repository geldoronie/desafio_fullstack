import moment from 'moment'
import React, { useState } from 'react'
import { Task } from '../types/Types'
 
type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}
 
const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
    const [ inputDescription, setInputDescription ] = useState<string>('')
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputDescription(e.target.value)
    }
 
    const handleSubmit = () => {
         
        const newTask: Task = {
            _id: 0,
            description: inputDescription,
            duedate: new Date(),
            done: false,
            hide: false
        }
         
        setTasks([newTask, ...tasks])
        setInputDescription('')
    }
 
    return (
        <>
            <div>
                <input
                    type="text"
                    className="input"
                    value={inputDescription}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit} className="btn is-primary">Adicionar</button>
            </div>
            <div>
                <input
                    type="text"
                    className="input"
                    value={inputDescription}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit} className="btn is-primary">Adicionar</button>
            </div>

        </>
    )
}
 
export default TaskInput