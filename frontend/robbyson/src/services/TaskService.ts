import http from "../http-common"

class TaskService {
  getAll() {
    const taskList = http.get("/task")
    return taskList
  }
  getFiltered(description: String) {
    return http.get("/task?keyword=" + description)
  }
}

export default new TaskService()