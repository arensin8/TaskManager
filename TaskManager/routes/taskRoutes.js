import express from  "express";
const router = express.Router();
import { createTask, updateTask, getTask, getAllTasks } from '../controllers/taskController.js';



// define routes for tasks
router.post('/add', createTask);
router.put('/:id', updateTask);
router.get('/:id', getTask);
router.get('/', getAllTasks);


export default router;
