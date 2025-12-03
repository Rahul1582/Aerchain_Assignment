// routes/voices.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

router.post("/createTask", controller.createTask);
router.get("/getAllTasks", controller.getAllTasks);
// router.get("/getTaskById/:id", controller.getVoice);
// router.put("/updateTaskById/:id", controller.updateVoice);
// router.delete("/deleteTask/:id", controller.deleteVoice);

module.exports = router;
