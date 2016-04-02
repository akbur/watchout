var Dot = function (x, y) {
  this.x = x;
  this.y = y;
};

Dot.prototype.enemyFactory = function (num) {
  var enemies = [];
  for (var i = 0; i < num; i++) {
    var enemy = new Dot (
      Dot.prototype.randomCoord().x,
      Dot.prototype.randomCoord().y
    );
    enemies.push(enemy);
  }
  return enemies;
};

Dot.prototype.randomCoord = function () {
  return {
           'x' : Math.random() * (spec.boardWidth - spec.enemyRadius),
           'y' : Math.random() * (spec.boardHeight - spec.enemyRadius)
         };
};
