var Score = function (text, value) {
  this.text = text;
  this.value = value;
};

Score.prototype.scoreFactory = function () {
  var highScore = new Score("High Score: ", 0);
  var currScore = new Score("Current Score: ", 0);
  var collisions = new Score("Collisions: ", 0);
  
  return [highScore, currScore, collisions];
};
