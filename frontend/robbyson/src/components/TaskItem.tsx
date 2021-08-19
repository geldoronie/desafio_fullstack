import React, {useState} from 'react'
import { Task } from '../types/Types'
import { Grid, TextField } from '@material-ui/core'
import moment from 'moment'
import TaskService from '../services/TaskService'
 
type Props = {
    task: Task
    handleUpdate: (task: Task) => void
    handleDone: (task: Task) => void
    handleHide: (task: Task) => void
    handleDelete: (task: Task) => void
    //handleChange: (event: any, task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleUpdate, handleDone, handleHide, handleDelete/*, handleChange*/ }) => {
    const [inputDescription, setInputDescription] = useState(task.description)
    const [inputDuedate, setInputDueate] = useState(task.duedate)

    const handleChangeDescription = (e: any) => {
        setInputDescription(e.currentTarget.value)
    };

    const handleChangeDuedate = (e: any) => {
        setInputDueate(e.currentTarget.value)
    };

    const updateTask = () => {
        task.description = inputDescription
        task.duedate = inputDuedate
        handleUpdate(task)
    }

    return (
        <Grid container>
            <Grid item xs={4}>
                <TextField
                    value={inputDescription}
                    onChange={handleChangeDescription}
                ></TextField>
                {/*<span className="checkbox-label">{ task.description }</span>*/}
            </Grid>
            <Grid item xs={4}>
                <TextField
                    value={inputDuedate}
                    onChange={handleChangeDuedate}
                ></TextField>
                {/** 
                <span className="checkbox-label">{ task.duedate ? moment(task.duedate).format("DD/MM/YYYY") : "-" }</span>
                */}
            </Grid>
            <Grid item xs={1}>
                <button
                    onClick={updateTask}
                    className="btn"
                >Atualizar</button>
            </Grid>
            <Grid item xs={1}>
                <button
                    onClick={() => handleDelete(task)}
                    className="btn"
                >Excluir</button>
            </Grid>
            <Grid item xs={1}>
                <button
                    onClick={() => handleDone(task)}
                    className="btn"
                >Concluir</button>
            </Grid>
            <Grid item xs={1}>
                <button
                    onClick={() => handleHide(task)}
                    className="btn"
                >Esconder</button>
            </Grid>
        </Grid>
    )
}
 
export default TaskItem