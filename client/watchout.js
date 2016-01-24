
var spec = { "boardHeight":500,
             "boardWidth": 1000,
             "enemyRadius": 50,
             "playerRadius": 40,
             "interval": 1000,
             "scoreInterval": 100,
             "numberOfEnemies": 10,
           };


var board = d3.select("body").append("svg")
  .attr("class", "board")
  .attr("height", spec.boardHeight)
  .attr("width", spec.boardWidth);

var enemies = Dot.prototype.enemyFactory(spec.numberOfEnemies);
var player = new Dot(spec.boardWidth/2, spec.boardHeight/2);

var scoreboard = d3.select(".scoreboard");
var scores = Score.prototype.scoreFactory();

setInterval(function(){
  updateEnemies(enemies);

}, spec.interval);

setInterval(function() {
  updateScoreboard(scoreboard);
}, spec.scoreInterval);

// JOIN player
var playerData = board.selectAll(".player").data([player]);

// DRAG player
var drag = d3.behavior.drag()
  .on("drag", function() {
    // Check if in bounds before moving piece 
    if (d3.event.x < spec.boardWidth && d3.event.y < spec.boardHeight
        && d3.event.x > 0 && d3.event.y > 0) {
      // Move the player piece
      playerData.attr("x", d3.event.x) 
        .attr("y", d3.event.y);
      // Update player data
      player.x = d3.event.x;
      player.y = d3.event.y;
      }
  });

// ENTER player
playerData.enter().append("image")
  .attr("xlink:href", "images/astronaut_spacewalk.png") 
  .attr({"height": spec.playerRadius, "width": spec.playerRadius})
  .attr("x", function (d){ return d.x; })
  .attr("y", function (d){ return d.y; })
  .attr("class", "player")
  .call(drag);
  