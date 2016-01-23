
var spec = { "boardHeight":500,
             "boardWidth": 500,
             "enemyRadius": 50,
             "playerRadius": 20,
             "interval": 1000,
             "numberOfEnemies": 10,
           };


var board = d3.select("body").append("svg")
  .attr('height', spec.boardHeight)
  .attr('width', spec.boardWidth);
var enemies = Dot.prototype.enemyFactory(spec.numberOfEnemies);
var player = new Dot(spec.boardWidth/2, spec.boardHeight/2);

var scoreboard = d3.select(".scoreboard");
var scores = Score.prototype.scoreFactory();

function update(enemies) {

  //JOIN
  var enemyData = board.selectAll(".enemy").data(enemies);
  var scoreData = scoreboard.selectAll("div").data(scores)
                    .text(function (d, i) {
                      if (i === 1) {
                        d.value++;
                      }
                      return d.text + d.value});
  
  

  //ENTER
  enemyData.enter().append("circle")
    .attr("class", "enemy")
    .attr("cx", function (d, i){ return d.x; })
    .attr("cy", function (d, i){ return d.y; });
    

  //UPDATE
  enemyData.transition()
    .tween('track-position', function (d) {   
      d.x = this.cx.baseVal.value;
      d.y = this.cy.baseVal.value;
      
      var distance = Math.sqrt(Math.pow((d.x-player.x), 2) + Math.pow((d.y-player.y), 2));
      
      if (distance < spec.enemyRadius + spec.playerRadius) {
        scores[2].value++;
        if (scores[1].value > scores[0].value) {
          scores[0].value = scores[1].value;
        }
        scores[1].value = 0;
      }
    })
    .attr({cx: function(d){ return d.randomCoord(); },
           cy: function(d){ return d.randomCoord(); } 
    });  

  //EXIT
  enemyData.exit().remove();
}

// JOIN player
var playerData = board.selectAll(".player").data([player]);

// DRAG player
var drag = d3.behavior.drag()
  .on("drag", function() {
    // Check if in bounds before moving piece 
    if (d3.event.x < spec.boardWidth && d3.event.y < spec.boardHeight
        && d3.event.x > 0 && d3.event.y > 0) {
      // Move the player piece
      playerData.attr("cx", d3.event.x) 
        .attr("cy", d3.event.y);
      // Update player data
      player.x = d3.event.x;
      player.y = d3.event.y;
      }
  });

// ENTER player
playerData.enter().append("circle")
  .attr("cx", function (d){ return d.x; })
  .attr("cy", function (d){ return d.y; })
  .attr("class", "player")
  .call(drag);
  
setInterval(function(){
  update(enemies);

}, spec.interval);
