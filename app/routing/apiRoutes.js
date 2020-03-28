var friends = require('../data/friends.js')

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
      return res.json(friends);
  });

  app.post('/api/friends', function(req, res){
    var differenceMax = 40;
    var userScores = req.body.scores;
    var matchFriend;
    
    friends.forEach(function (friend) {
      var differenceMin = 0;
      for (i = 0; i < friend.scores.length; i++) {
        differenceMin += Math.abs(friend.scores[i] - userScores.scores[i]);
      }
      if (differenceMin < differenceMax) {
        maxDifference = differenceMin;
        matchFriend = friend;
      };
    });
    response.json(matchFriend);
    friends.push(request.body);
});


    
    
    
  
};
