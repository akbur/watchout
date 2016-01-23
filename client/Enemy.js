var Enemy = function(x, y) {
  this.x = x;
  this.y = y;
};

Enemy.prototype.enemyFactory = function (num) {
  var enemies = [];
  for (var i = 0; i < num; i++) {
    var enemy = new Enemy(
      Enemy.prototype.randomCoord(),
      Enemy.prototype.randomCoord()
      );
    
    enemies.push(enemy);
  }
  
  return enemies;
};

Enemy.prototype.randomCoord = function() {
  return Math.random() * (spec.boardWidth - spec.enemyRadius);
};
