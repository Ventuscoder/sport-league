let mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/sports-league');

mongoose.connect('mongodb+srv://adminsportleague:passwordsportleague@cluster0.dhvp799.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
.then(function(){
  console.log('Database Connected')
})
.catch(function(err){
  console.log(err)
})

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