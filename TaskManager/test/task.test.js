import request from "supertest";
import app from "../Server.js"; 
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Task Management API", () => {
  let taskId;

  it("should create a new task", async () => {
    const response = await request(app)
      .post("/api/tasks/add")
      .send({
        title: "Test Task2",
        description: "This is a test task2",
        dueDate: "2024-12-31",
        priority: "medium",
        assignedMember: "John Doe",
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.task).toHaveProperty("title", "Test Task2");
    expect(response.body.task).toHaveProperty("description", "This is a test task2");
    taskId = response.body.task._id;
  });

  it("should fetch all tasks", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.statusCode).toBe(200);
    expect(response.body.tasks).toBeInstanceOf(Array);
  });

  it("should fetch a task by ID", async () => {
    const response = await request(app).get(`/api/tasks/${taskId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.task).toHaveProperty("_id", taskId);
  });

  it("should update a task", async () => {
    const response = await request(app)
      .put(`/api/tasks/${taskId}`)
      .send({ status: "completed" });
    expect(response.statusCode).toBe(200);
    expect(response.body.task).toHaveProperty("status", "completed");
  });

  it("should generate a completion report", async () => {
    const response = await request(app)
      .get("/api/reports/completion?startDate=2024-01-01&endDate=2024-12-31");
    expect(response.statusCode).toBe(200);
    expect(response.body.tasks).toBeInstanceOf(Array);
  });

  it("should generate task completion statistics", async () => {
    const response = await request(app).get("/api/reports/completion-stats");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("totalCompleted");
    expect(response.body).toHaveProperty("averageCompletionTime");
  });
});
