import { Router } from "express";
import {generateValidators} from "../Requests/TaskRequest";
import TaskController  from "../controllers/TaskController"

const router = Router();

router.get("/", TaskController.index);

router.post("/tasks/add", generateValidators, TaskController.store);

router.get("/tasks/:id/edit", TaskController.edit);

router.post("/tasks/:id/edit", generateValidators, TaskController.update);

router.get("/tasks/:id/delete", TaskController.destroy);

router.get("/tasks/:id/toggleDone", TaskController.taskToggleDone);

router.get("/about", (req, res) => {
    res.send("Hello World!");
});

export default router;