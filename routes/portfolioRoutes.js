const express = require("express");
const Portfolio = require("../model/portfolioSchema");

const router = express.Router();

// ✅ CREATE new portfolio
router.post('/', async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    res.status(201).json({ message: 'Portfolio created', portfolio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating portfolio' });
  }
});


// ✅ GET portfolio data
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Error fetching portfolio" });
  }
});

// ✅ UPDATE portfolio data
router.put("/:id", async (req, res) => {
  try {
    const updated = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating portfolio" });
  }
});

module.exports = router;
