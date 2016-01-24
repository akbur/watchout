function updateEnemies(enemies) {

  //JOIN
  var enemyData = board.selectAll(".enemy").data(enemies);

  //ENTER
  enemyData.enter().append("image")
    .attr("class", "enemy")
    .attr("xlink:href", "images/asteroid.png")
    .attr("x", function (d){ return d.x; })
    .attr("y", function (d){ return d.y; })
    .attr({"height":spec.enemyRadius, "width":spec.enemyRadius});
    

  //UPDATE
  enemyData.transition()
    .tween('track-position', function (d) {   
      d.x = this.x.baseVal.value;
      d.y = this.y.baseVal.value;
      
      var distance = Math.sqrt(Math.pow((d.x-player.x), 2) + Math.pow((d.y-player.y), 2));
      
      if (distance < spec.enemyRadius + spec.playerRadius) {
        scores[2].value++;
        if (scores[1].value > scores[0].value) {
          scores[0].value = scores[1].value;
        }
        scores[1].value = 0;
      }
    })
    .attr({ x: function(d){ return d.randomCoord().x; },
            y: function(d){ return d.randomCoord().y; } 
    });  

  //EXIT
  enemyData.exit().remove();
}

function updateScoreboard(scoreboard) {
  var scoreData = scoreboard.selectAll("div").data(scores)
                  .text(function (d, i) {
                    if (i === 1) {
                      d.value++;
                    }
                    return d.text + d.value});
  
}
