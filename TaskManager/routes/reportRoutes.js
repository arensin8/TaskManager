const express = require("express");
const { completion, completionStats } = require("../controllers/reportController");
const router = express.Router();


// define routes
router.get('/completion' , completion)
router.get('/completion-stats' , completionStats)

module.exports = router;