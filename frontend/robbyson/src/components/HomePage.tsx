import React, { useState, useEffect } from 'react'
import '../App.css';
import { Task } from '../types/Types';
import TaskList from './TaskList'
import TaskService from '../services/TaskService'
import { Grid, Input, FormControl } from '@material-ui/core'
//import { flexbox } from '@material-ui/system'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const initialState: Task[] = []

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: '#95d9da',
    border: 0,
    color: 'white',
    height: 'auto',
    padding: '5px',
    flexGrow: 1,
  },
  input: {
    backgroundColor: 'white',
    margin: "10px",
    boxShadow: "0 0 5px 1px lightgrey, inset 0 0 2px 1px lightgrey",
    borderColor: 'white',
    padding: "3px 0 3px 20px",
    fontSize: "11px"
  },
  inputFont: {
    fontSize: "11px"
  },
}))

type Props = {
  tasks: Task[]
}

//const [books, setBooks] = useState<Array<Book>>([]);
const HomePage: React.FC<Props> = () => {
  const classes = useStyles()

  const [tasks, setTasks] = useState(initialState)
  const [keyword, setKeyword] = useState("")

  const retrieveTasks = () => {
    TaskService.getAll()
      //.then(()=>console.log("getAll"))
      .then(response => {
        console.log(response)
        setTasks(response.data)
        //setFilteredBooks(response.data)
      })
      .catch(e => {
        console.log(e)
      });
    }

  useEffect(() => {
    console.log("TEST2")
    //setTasks([{_id: 0, done: false, hide: false, description: "TEST"}])
    retrieveTasks()
  }, [keyword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
    retrieveTasks()
  };

  return (
    <div>
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className="input_area">
              <FormControl fullWidth={true}>
                <Input
                  type="text" 
                  onChange={handleChange}
                  className={classes.input}
                  placeholder="Procurar as tarefas"
                  disableUnderline={true}
                  value={keyword}
                />
              </FormControl>
              <button className="clickable" onClick={retrieveTasks}>Buscar</button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="text">
              Total: {tasks.length}
            </div>
          </Grid>
          <Grid item xs={12}>
            <TaskList 
              tasks={tasks} 
              setTasks={setTasks} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage;
