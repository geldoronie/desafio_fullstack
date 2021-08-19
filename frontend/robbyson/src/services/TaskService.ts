import http from "../http-common"
import { Task } from "../types/Types"

class TaskService {
  getAll() {
    const taskList = http.get("/task")
    return taskList
  }
  getFiltered(keyword: String) {
    console.log("keyword " + keyword)
    return http.get("/task?keyword=" + keyword)
  }
  addTask(task: Task) {
    const result = http.post("/task", task)
    return result;
  }
  updateTask(task: Task) {
    return http.put(`/task/${task._id}`, task);
  }
  deleteTask(_id: Number) {
    return http.delete(`/task/${_id}`);
  }
  patchTask(task: Task) {
    return http.patch(`/task/${task._id}`, task)
  }
}

export default new TaskService()