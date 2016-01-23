
var spec = { "boardHeight":500,
             "boardWidth": 500,
             "enemyRadius": 50,
             "interval": 1000,
             "numberOfEnemies": 10,
           };


var board = d3.select("body").append("svg")
  .attr('height', spec.boardHeight)
  .attr('width', spec.boardWidth);

var enemies = Dot.prototype.enemyFactory(spec.numberOfEnemies);
var player = new Dot(spec.boardWidth/2, spec.boardHeight/2);

function update(enemies) {

  //JOIN
  var enemyData = board.selectAll(".enemy").data(enemies);

  //ENTER
  enemyData.enter().append("circle")
    .attr("class", "enemy")
    .attr("cx", function (d){ return d.x; })
    .attr("cy", function (d){ return d.y; });

  //UPDATE
  enemyData.transition().attr({cx: function(d){ d.x = d.randomCoord(); return d.x; },
                             cy: function(d){ d.y = d.randomCoord(); return d.y; } });  

  //EXIT
  enemyData.exit().remove();
}

var playerData = board.selectAll(".player").data([player]);

var drag = d3.behavior.drag()
  .on("drag", function() { playerData.attr("cx", d3.event.x) 
                                     .attr("cy", d3.event.y)
  });

playerData.enter().append("circle")
  .attr("cx", function (d){ return d.x; })
  .attr("cy", function (d){ return d.y; })
  .attr("class", "player")
  .call(drag);
  
setInterval(function(){
  update(enemies);
}, spec.interval);
