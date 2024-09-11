import  express from "express";
import  { completion, completionStats } from "../controllers/reportController.js";
const router = express.Router();


// define routes for reports
router.get('/completion' , completion)
router.get('/completion-stats' , completionStats)

export default router;