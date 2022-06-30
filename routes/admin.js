const express = require("express");
const router = express.Router();
const adminCtr = require("../controllers/admin");
router.post("/admin", adminCtr.addAdmin);
module.exports = router;
