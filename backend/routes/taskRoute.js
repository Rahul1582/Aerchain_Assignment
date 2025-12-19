// routes/voices.js
import express  from 'express';
import taskController from "../controllers/taskController.js";

const router = express.Router();

router.post("/createTask", taskController.createTask);
// router.get("/getAllTasks", controller.getAllTasks);
// router.get("/getTaskById/:id", controller.getVoice);
// router.put("/updateTaskById/:id", controller.updateVoice);
// router.delete("/deleteTask/:id", controller.deleteVoice);

export default router;
