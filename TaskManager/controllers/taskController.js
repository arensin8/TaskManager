const TaskModel = require("../models/task");

const createTask = async (req, res) => {
  const { title, description, dueDate, priority, assignedMember } = req.body;
  try {
    const task = new TaskModel({
      title,
      description,
      dueDate,
      priority,
      assignedMember,
    });
    await task.save();
    res.status(201).json({
      statusCode: 201,
      task,
    });
  } catch (error) {
    res.status(500).json({ statusCode : 500 , error: 'Failed to create task' });
  }
};

const updateTask = async (req, res) => {
  const { status } = req.body;
  try {
    const task = await TaskModel.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json({
      statusCode : 200,
      task
    });
  } catch (err) {
    res.status(500).json({ statusCode : 500 , error: 'Failed to update task' });
  }
};

// Get task by ID
const getTask = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);
    res.status(200).json({
      statusCode : 200,
      task
    });
  } catch (err) {
    res.status(500).json({ statusCode : 500 , error: 'Failed to get task' });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json({
      statusCode : 200,
      tasks
    });
  } catch (err) {
    res.status(500).json({ statusCode : 500 ,error: 'Failed to get tasks' });
  }
}

module.exports = { createTask, updateTask, getAllTasks, getTask };