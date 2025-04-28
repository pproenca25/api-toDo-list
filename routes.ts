import { Request, Response, Router } from "express";
import TaskTodo from "./src/controllers/taskController";

const taskTodo = new TaskTodo
const router = Router()


router.get('/task', taskTodo.getTask)
router.get('/task/:id_task', taskTodo.getTaskId)
router.post('/task', taskTodo.addTask)
router.put('/task/:id_task', taskTodo.updateTask)
router.delete('/task/:id_task', taskTodo.deleteTask)



export default router;