import taskService from "../services/taskService.js";

class TaskController {
  async createTask(req, res) {
    try {
      if (!req.body.title) {
        return res.status(400).json({ error: "Title is required" });
      }
      const task = await taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: "Failed to create task" });
    }
  }
}

export default new TaskController();
