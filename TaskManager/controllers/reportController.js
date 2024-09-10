const TaskModel = require("../models/task");


const completion =  async (req, res) => {
    const { startDate, endDate } = req.query;
  
    try {
      const tasks = await TaskModel.find({
        status: 'completed',
        updatedAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
      });
  
      res.status(200).json({
        statusCode: 200,
        tasks,
      });
    } catch (err) {
      res.status(500).json({statusCode : 500 , error: 'Error generating report' });
    }
  }

  const completionStats = async (req, res) => {
    try {
      const tasks = await TaskModel.find({ status: 'completed' });
  
      if (tasks.length === 0) {
        return res.status(404).json({ statusCode : 404 , message: 'No completed tasks found' });
      }
  
      const totalCompleted = tasks.length;
      const averageTime = tasks.reduce((sum, task) => {
        const timeToComplete = new Date(task.updatedAt) - new Date(task.createdAt);
        return sum + timeToComplete;
      }, 0) / totalCompleted;
  
      const avgCompletionTimeInHours = averageTime / (1000 * 60 * 60); // converting ms to hours
  
      res.status(200).json({
        statusCode : 200, 
        totalCompleted,
        averageCompletionTime: avgCompletionTimeInHours,
      });
    } catch (err) {
      res.status(500).json({statusCode:500, error: 'Error generating stats' });
    }
  }

  module.exports = {completion , completionStats}