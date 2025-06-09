const express = require("express");
const { handleGenerateShortUrl } = require("../controllers/urlController");
const router = express.Router();

router.post("/", handleGenerateShortUrl);

module.exports = router;