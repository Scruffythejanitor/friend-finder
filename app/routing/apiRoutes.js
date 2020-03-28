
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        
        var matchFriend = {
            name: "",
            photo: "",
            difference: 40
        };
        var userInfo = req.body;
        var personChoices = userInfo.scores;
        var minNumber = 0
        for (var i = 0; i < friends.length; i++) {
            var pickedFriend = friends[i];
            
            console.log(pickedFriend.name);
            for (var j = 0; j < pickedFriend.scores.length; j++) {
                var pickedFriendScore = pickedFriend.scores[j];
                var userScore = personChoices[j];
                minNumber += Math.abs(parseInt(userScore) - parseInt(pickedFriendScore))
            }
            if (minNumber <= matchFriend.difference) {
                matchFriend.name = pickedFriend.name;
                matchFriend.photo = pickedFriend.photo;
                matchFriend.difference = minNumber
            }
        }
        console.log(matchFriend.photo);
        
        friends.push(userInfo);
        res.json(matchFriend)
    })
};