// const mongoose = require('mongoose');

// const portfolioSchema = new mongoose.Schema({
//   name: String,
//   title: String,
//   about: String,
//   skills: [String],
//   projects: [
//     {
//       title: String,
//       description: String,
//       github: String,
//       demo: String,
//     }
//   ],
//   contact: {
//     email: String,
//     phone: String
//   }
// });

// module.exports = mongoose.model('Portfolio', portfolioSchema);



const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },
    skills: {
      type: [String],
    },
    projects: [
      {
        title: String,
        description: String,
        github: String,
        demo: String,
      },
    ],
    contact: {
      email: String,
      phone: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
