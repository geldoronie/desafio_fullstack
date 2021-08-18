import React from 'react'
import { Task } from '../types/Types'
import { Grid, TextField } from '@material-ui/core'
import moment from 'moment'
 
type Props = {
    task: Task
    handleUpdate: (task: Task) => void
    handleDone: (task: Task) => void
    handleHide: (task: Task) => void
    handleDelete: (task: Task) => void
    handleChange: (event: any, task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleUpdate, handleDone, handleHide, handleDelete, handleChange }) => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <TextField
                    value={task.description}
                    onChange={(evt) => handleChange(evt, task)}
                ></TextField>
                {/*<span className="checkbox-label">{ task.description }</span>*/}
            </Grid>
            <Grid item xs={4}>
                <TextField
                    value={task.duedate ? moment(task.duedate).format("DD/MM/YYYY") : "-"}
                    onChange={(evt) => console.log(evt)}
                ></TextField>
                {/** 
                <span className="checkbox-label">{ task.duedate ? moment(task.duedate).format("DD/MM/YYYY") : "-" }</span>
                */}
            </Grid>
            <Grid item xs={1}>
                <button
                    onClick={() => handleUpdate(task)}
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