
var spec = { "boardHeight":500,
             "boardWidth": 500,
             "enemyRadius": 50,
             "interval": 1000
           };


var svg = d3.select("body").append("svg")
  .attr('height', spec.boardHeight)
  .attr('width', spec.boardWidth);

var enemies = Enemy.prototype.enemyFactory(10);


function update(enemies) {

  //JOIN
  var enemyData = svg.selectAll("circle").data(enemies);

  //ENTER
  enemyData.enter().append("circle")
    .attr("class", "enemy")
    .attr("cx", function(d){ return d.x; })
    .attr("cy", function(d){ return d.y; });

  //UPDATE
  enemyData.transition().attr({cx: function(d){ d.x = d.randomCoord(); return d.x; },
                             cy: function(d){ d.y = d.randomCoord(); return d.y; } });  

  //EXIT?

}

setInterval(function(){
  update(enemies);
}, spec.interval);

/*
<svg width="100%" height="100%" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink">       
  <image xlink:href="/files/2917/fxlogo.png" x="0" y="0" height="100" width="100" />    
</svg>
*/