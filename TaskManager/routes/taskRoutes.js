const express = require("express");
const router = express.Router();
const { createTask, updateTask, getTask, getAllTasks } = require('../controllers/taskController');



// define routes
router.post('/add', createTask);
router.put('/:id', updateTask);
router.get('/:id', getTask);
router.get('/', getAllTasks);


module.exports = router;
