const shortid = require("shortid");
const URL = require("../models/url");

const handleGenerateShortUrl = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Send a body" });
  }
  let { url, alias } = req.body;
  let aliasFound = false;
  if (!url) return res.status(400).json({ error: "Send a URL" });

  if (alias) {
    // Await the DB call and use .length on the result
    const response = await URL.find({ shortId: alias });
    if (response.length !== 0) {
      alias = shortid.generate().substring(0, 4);
      aliasFound = true;
    }
  }
  const shortID = alias || shortid.generate().substring(0, 4);
  await URL.create({
    shortId: shortID,
    redirectUrl: url,
  });

  return res.status(200).json({ id: shortID, aliasFound: aliasFound });
};

module.exports = { handleGenerateShortUrl };
