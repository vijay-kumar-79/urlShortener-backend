const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get("/:shortID", async (req, res) => {
  const shortID = req.params.shortID;
  try {
    const entry = await URL.findOneAndUpdate(
      {
        shortId: shortID,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    
    if (!entry) {
      return res.status(404).send("URL not found");
    }
    res.redirect(entry.redirectUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;