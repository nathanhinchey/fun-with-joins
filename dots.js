(function() {
  'use strict';
  window.dots = window.dots || {};

  window.dots.set1 = [
    {x: 20, y:30, color:"blue"},
    {x: 40, y:20, color:"red"},
    {x: 10, y:50, color:"green"},
  ];

  window.dots.set2 = [
    {x: 30, y:20, color:"blue"},
    {x: 50, y:30, color:"red"},
    {x: 5, y:80, color:"green"},
  ];

  window.dots.data = window.dots.set1;
  var svg = d3.select("svg");

  window.dots.renderDots = function(){
    var circle = svg.selectAll("circle")
      .data(window.dots.data) // UPDATE

    circle.enter().append("circle");

    circle
      .transition()
      .attr("r", 5)
      .attr("cx", function(d){ return d.x; })
      .attr("cy", function(d){ return d.y; })
      .attr("fill", function(d){ return d.color; })

    circle.exit().remove(); //EXIT
  }
}());
