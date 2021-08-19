import React, {useState} from 'react'
import { Task } from '../types/Types'
import { Grid, TextField } from '@material-ui/core'

const rowStyle = {
    backgroundColor: "#E3F2FD"
}
const doneStyle = {
    backgroundColor: "lightgrey"
}
 
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
        <Grid container key={"task_item_" + task._id + "_hide_" + task.hide} style={task.done ? doneStyle : rowStyle}>
            <Grid item xs={6} lg={4}>
                {task.hide ?
                    <div>{task.description}</div>
                    :
                    <TextField
                        key={"task_item_text1_" + task._id}
                        value={inputDescription}
                        onChange={handleChangeDescription}
                    ></TextField>
                }
            </Grid>
            <Grid item xs={6} lg={4}>
                {task.hide ?
                    <div>{task.duedate}</div>
                    :
                    <TextField
                        value={inputDuedate}
                        onChange={handleChangeDuedate}
                    ></TextField>
                }
            </Grid>
            <Grid item xs={3} lg={1}>
                {task.hide ?
                    <div></div>
                    :
                    <button
                        onClick={updateTask}
                        className="blue"
                    >Atualizar</button>
                }
            </Grid>
            <Grid item xs={3} lg={1}>
                {task.hide ?
                        <div></div>
                        :
                        <button
                        onClick={() => handleDelete(task)}
                        className="red"
                    >X Excluir</button>
                }
            </Grid>
            <Grid item xs={3} lg={1}>
                {task.hide ? 
                    <span>{task.done ? "Concluida" : "Aberta"}</span>
                    :
                    <button
                        onClick={() => handleDone(task)}
                        className={task.done ? "grey" : "green"}
                    >{task.done ? "Desfazer" : "Concluir"}</button>
                }
            </Grid>
            <Grid item xs={3} lg={1}>
                <button
                    onClick={() => handleHide(task)}
                    className="blue"
                >{task.hide ? "Mostrar" : "Esconder"}</button>
            </Grid>
        </Grid>
    )
}
 
export default TaskItem