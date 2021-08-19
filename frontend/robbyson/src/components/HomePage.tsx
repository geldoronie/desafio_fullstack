import React, { useState, useEffect } from 'react'
import '../App.css';
import { Task } from '../types/Types';
import TaskList from './TaskList'
import TaskService from '../services/TaskService'
import { Grid, TextField, FormControl } from '@material-ui/core'
import TaskInput from './TaskInput'

const initialState: Task[] = []

type Props = {
  tasks: Task[]
}

//const [books, setBooks] = useState<Array<Book>>([]);
const HomePage: React.FC<Props> = () => {
  //const classes = useStyles()

  const [tasks, setTasks] = useState(initialState)
  const [keyword, setKeyword] = useState("")
  const [error, setError] = useState("")

  const filtereTask = () => {
    setError("")
    TaskService.getFiltered(keyword)
    .then((response) => {
      console.log(response)
      const newTasks = response.data.slice()
      setTasks([])
      setTasks(newTasks)
    })
    .catch((error) => {
      console.log(error)
      setError("Algum erro ocorreu ao buscar as tarefas")
    })
  }

  useEffect(filtereTask, [keyword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  };

  const addTask = (task: Task) => {
    setError("")
    //task.duedate = new Date()
    TaskService.addTask(task)
    .then((response) => {
      filtereTask()
    })
    .catch((error) => {
      console.log(error)
      setError("Algum erro ocorreu ao adicionar as tarefas")
    })
  }

  const updateTask = (task: Task) => {
    console.log('updateTask')
    setError("")
    TaskService.updateTask(task)
    .then((response) => {
      filtereTask()
    })
    .catch((error) => {
      console.log(error)
      setError("Algum erro ocorreu ao atualizar as tarefas")
    })
  }
  const deleteTask = (task: Task) => {
    setError("")
    TaskService.deleteTask(task._id)
    .then((response) => {
      filtereTask()
    })
    .catch((error) => {
      console.log(error)
      setError("Algum erro ocorreu ao excluir as tarefas")
    })
  }
  const patchTask = (task: Task) => {
    setError("")
    TaskService.patchTask(task)
    .then((response) => {
      filtereTask()
    })
    .catch((error) => {
      console.log(error)
      setError("Algum erro ocorreu ao mudar estado das tarefas")
    })
  }

  return (
    <div>
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div>{error}</div>
          </Grid>
          <Grid item xs={12}>
            <div className="input_area">
              <FormControl fullWidth={false}>
                <TextField
                  className="input"
                  onChange={handleChange}
                  placeholder="Filtrar as tarefas"
                  value={keyword}
                />
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TaskInput addTask={addTask} />
          </Grid>
          <Grid item xs={12}><hr/></Grid>
          <Grid item xs={12}>
            <TaskList
              tasks={tasks} 
              setTasks={setTasks} 
              updateTask={updateTask}
              deleteTask={deleteTask}
              patchTask={patchTask}
              />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage;
