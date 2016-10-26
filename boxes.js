(function() {
  'use strict';
  window.boxes = window.boxes || {};

  window.boxes.set1 = [
    {x: 20, y:30, color:"blue"},
    {x: 40, y:20, color:"red"},
    {x: 10, y:50, color:"green"},
  ];

  window.boxes.set2 = [
    {x: 30, y:20, color:"blue"},
    {x: 50, y:30, color:"red"},
    {x: 5, y:80, color:"green"},
  ];

  window.boxes.data = window.boxes.set1;
  var svg = d3.select("svg");

  window.boxes.renderDots = function(){
    var circle = svg.selectAll("circle")
      .data(window.boxes.data)

    circle.exit().remove();

    circle.enter().append("circle")
    // .merge(circle)
    .attr("cx", function(d){ return d.x; })
    .attr("cy", function(d){ return d.y; })
    .attr("fill", function(d){ return d.color; })
    .attr("r", 5);
  }
}());
