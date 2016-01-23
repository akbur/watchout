var Dot = function(x, y) {
  this.x = x;
  this.y = y;
};

Dot.prototype.enemyFactory = function (num) {
  var enemies = [];
  for (var i = 0; i < num; i++) {
    var enemy = new Dot (
      Dot.prototype.randomCoord(),
      Dot.prototype.randomCoord()
      );
    
    enemies.push(enemy);
  }
  
  return enemies;
};

Dot.prototype.randomCoord = function() {
  return Math.random() * (spec.boardWidth - spec.enemyRadius);
};
