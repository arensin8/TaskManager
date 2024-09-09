const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  assignedMember: { type: String },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;