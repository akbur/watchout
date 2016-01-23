var Enemy = function(x, y) {
  this.x = x;
  this.y = y;
};

Enemy.prototype.enemyFactory = function (num) {
  var enemies = [];
  for (var i = 0; i < num; i++) {
    var enemy = new Enemy(
      Math.random() * (500 - 50),
      Math.random() * (500 - 50)
    );
    
    enemies.push(enemy);
  }
  
  return enemies;
};
