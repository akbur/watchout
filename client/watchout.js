// start slingin' some d3 here.
var svg = d3.select("body").append("svg")
  .attr('height', 500)
  .attr('width', 500);

var enemies = Enemy.prototype.enemyFactory(10);

var enemyData = svg.selectAll("circle").data(enemies);

enemyData.enter().append("circle")
  .attr("class", "enemy")
  .attr("cx", function(d){ return d.x; })
  .attr("cy", function(d){ return d.y; });

/*
<svg width="100%" height="100%" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink">       
  <image xlink:href="/files/2917/fxlogo.png" x="0" y="0" height="100" width="100" />    
</svg>
*/