var express = require('express');
var router = express.Router();
var teams = require('./users');

router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/teams', function(req, res, next) {
  teams.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      return;
    }
    res.render('teams', {teams: docs.sort((a, b) => (a.wins > b.wins ? -1 : 1))})
  });
});

router.get('/match', function(req, res, next) {
  res.render('match');
});

router.post('/add-match', function(req, res, next) {
  //let winteamdata;
  teams.findOne({name: req.body.winteam}, function(err, docs) {
    docs.wins = docs.wins + 1;
    docs.save(function(err) {
      if (err) {
        return err;
      }
    })
    //winteamdata = docs;
  });
  //winteamdata.wins += 1;
  //teams.findOneAndUpdate({name: req.body.winteam}, {'$set': winteamdata}, {require: true});
  //let lossteamdata;
  teams.findOne({name: req.body.lossteam}, function(err, lose) {
    lose.losses = lose.losses + 1;
    lose.save(function(err) {
      if (err) {
        return err;
      }
    })
    //lossteamdata = docs;
  });
  //lossteamdata.losses += 1
  //teams.findOneAndUpdate({name: req.body.lossteam}, {'$set': lossteamdata}, {require: true});
  res.redirect('/teams');
});

router.get('/new', function(req, res, next) {
  res.render('new')
});

router.post('/new-team', function(req, res, next) {
  let newdata = {
    name: req.body.name,
    players: req.body.players,
    wins: req.body.wins,
    losses: req.body.losses
  };
  teams.create(newdata).then(function(a){
    res.redirect('/teams');
  });
});

module.exports = router;
