const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: String,
  title: String,
  about: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      github: String,
      demo: String,
    }
  ],
  contact: {
    email: String,
    phone: String
  }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
