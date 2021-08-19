import React, { useState } from 'react'
import { Task } from '../types/Types'
import { Grid, TextField } from '@material-ui/core'
 
type Props = {
    addTask: (task: Task) => void
}
 
const TaskInput: React.FC<Props> = ({ addTask }) => {
    const [ inputDescription, setInputDescription ] = useState<string>('')
    const [ inputDueate, setInputDueate ] = useState<string>('')
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputDescription(e.target.value)
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputDueate(e.target.value)
    }
 
    const handleSubmit = () => {
         
        const newTask: Task = {
            _id: 0,
            description: inputDescription,
            duedate: inputDueate,
            done: false,
            hide: false
        }
         
        addTask(newTask)
        setInputDescription('')
        setInputDueate("")
    }
 
    return (
        <Grid container>
            <Grid item xs={6} lg={4}>
                <TextField
                    placeholder="Descrição"
                    className="input"
                    value={inputDescription}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={6} lg={4}>
                <TextField
                    placeholder="Data de concluir"
                    className="input"
                    value={inputDueate}
                    onChange={handleDateChange}
                />
            </Grid>
            <Grid item xs={3} lg={1}>
                <button onClick={handleSubmit} className="btn">+ Adicionar</button>
            </Grid>
        </Grid>
    )
}
 
export default TaskInput