let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sports-league');

let schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    players: {
      type: Number,
      required: true
    },
    wins: {
      type: Number,
      required: true
    },
    losses: {
      type: Number,
      required: true
    }
  }
)

module.exports = mongoose.model('teams', schema);