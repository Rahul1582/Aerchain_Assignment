import supabase from "../config/supabase.js";

class TaskService {
  async createTask(data) {
    console.log(data)
    const payload = {
      title: data.title,
      description: data.description ?? null,
      status: data.status ?? "TODO",
      priority: data.priority ?? "MEDIUM",
      due_date: data.dueDate ? new Date(data.dueDate).toISOString() : null,
      position: typeof data.position === "number" ? data.position : 0
    };
    const { data: created, error } = await supabase.from("tasks").insert(payload).select().single();
    if (error) {
      throw error;
    }
    
    return created;
  }
}

export default new TaskService();
