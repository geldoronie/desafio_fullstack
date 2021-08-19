import React, { useState } from 'react'
import { Task } from '../types/Types'
 
type Props = {
    /*setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]*/
    addTask: (task: Task) => void
}
 
const TaskInput: React.FC<Props> = ({ addTask }) => {
    const [ inputDescription, setInputDescription ] = useState<string>('')
    const [ inputDate, setInputDate ] = useState<string>('')
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputDescription(e.target.value)
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputDate(e.target.value)
    }
 
    const handleSubmit = () => {
         
        const newTask: Task = {
            _id: 0,
            description: inputDescription,
            duedate: inputDate,
            done: false,
            hide: false
        }
         
        addTask(newTask)
        setInputDescription('')
        setInputDate("")
    }
 
    return (
        <>
            <input
                placeholder="Descrição"
                type="text"
                className="input"
                value={inputDescription}
                onChange={handleInputChange}
            />
            <input
                placeholder="Data de concluir"
                type="text"
                className="input"
                value={inputDate}
                onChange={handleDateChange}
            />
            <button onClick={handleSubmit} className="btn">Adicionar</button>
        </>
    )
}
 
export default TaskInput