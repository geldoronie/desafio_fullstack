import '../App.css';
import { Task } from '../types/Types';
//import { flexbox } from '@material-ui/system'
import { useLocation, useHistory } from "react-router-dom";

const DetailPage = () => {
  interface stateType {
    task: Task
  }
  const { state } = useLocation<stateType>()
  const history = useHistory()
  const task = state.task;

  return (
    <div>
      <div className="container">
        <div className="clickable" onClick={history.goBack}>&lt; Voltar</div>
        <div className="detailContainer">
          <div className="detail_description">
            {task.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage;
