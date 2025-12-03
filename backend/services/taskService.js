const prisma = require("../prisma/prisma");

class TaskService {
  async createTask(data) {
    return prisma.task.create({
      data: {
        title: data.title,
        description: data.description || null,
        status: data.status || "TODO",
        priority: data.priority || "LOW",
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        position: data.position ?? 0,
      }
    });
  }
}

module.exports = new TaskService();
