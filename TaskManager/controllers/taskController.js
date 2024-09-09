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
    res.status(500).json({ error: 'Failed to create task' });
  }
};
