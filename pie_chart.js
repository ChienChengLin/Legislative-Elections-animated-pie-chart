var svg = d3.select("body")
	.append("svg")
	.append("g")


svg.append("g")
	.attr("class", "slices");
svg.append("g")
	.attr("class", "labels");
svg.append("g")
	.attr("class", "lines");

var width = 1440,
    height = 675,
	radius = Math.min(width, height) / 2;

var pie = d3.layout.pie()
	.sort(null)
	.value(function(d) {
		return d.value;
	});

var arc = d3.svg.arc()
	.outerRadius(radius * 0.8)
	.innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
	.innerRadius(radius * 0.9)
	.outerRadius(radius * 0.9);

svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var key = function(d){ return d.data.label; };


/* initial data */
var color = d3.scale.ordinal()
	.domain(["民主進步黨", "中國國民黨", "時代力量", "親民黨", "無黨團結聯盟"])
	.range(["#55AA00", "#0044BB", "#FFD700", "#FF8C00", "#B22222"]);

var data_array = [{label: "民主進步黨", value: 68}, {label: "中國國民黨", value: 35}, {label: "時代力量", value: 5}, {label: "親民黨", value: 3}, {label: "無黨團結聯盟", value: 2}];

change(data_array);

function change(data) {
	gauge6.update(0);

	/* ------- PIE SLICES -------*/
	var slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(data), key);

	slice.enter()
		.insert("path")
		.on("click", function(d){
			gauge6.update(d.data.value);
		})
	    .on("mouseover", function(d){
	      var hovered = d;

	      text = svg.select(".labels").selectAll("text");         
	      text.style("opacity", function(d){
	            if(hovered.data.label == d.data.label){
	                return 1.0;
	            }
	            else{
	                return 0.1;
	            }
	      });

	      polyline = svg.select(".lines").selectAll("polyline")
	      polyline.style("opacity", function(d){
	            if(hovered.data.label == d.data.label){
	                return 1.0;
	            }
	            else{
	                return 0.1;
	            }
	      });
	      d3.select(this).transition().duration(300).style("opacity", 0.5);
	      d3.select(this).style("cursor", "pointer");
	    })
	    .on("mouseout", function(d){
	      d3.select(this).transition().duration(300).style("opacity", 1.0);
	      d3.select(this).style("cursor", "default");
	      
	      text = svg.select(".labels").selectAll("text");         
	      text.style("opacity", 0.1);
	      
	      polyline = svg.select(".lines").selectAll("polyline")
	      polyline.style("opacity", 0.1);
	    })
		.style("fill", function(d) { return color(d.data.label); })
		.attr("class", "slice");

	slice		
		.transition().duration(1000)
		.attrTween("d", function(d) {
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				return arc(interpolate(t));
			};
		})

	slice.exit()
		.remove();

	/* ------- TEXT LABELS -------*/

	var text = svg.select(".labels").selectAll("text")
		.data(pie(data), key);

	text.enter()
		.append("text")
		.attr("dy", ".35em")
		.style("opacity", 0.1)
		.text(function(d) {
			return d.data.label;
		});
	
	function midAngle(d){
		return d.startAngle + (d.endAngle - d.startAngle)/2;
	}

	text.transition().duration(1000)
		.attrTween("transform", function(d) {
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var d2 = interpolate(t);
				var pos = outerArc.centroid(d2);
				pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
				return "translate("+ pos +")";
			};
		})
		.styleTween("text-anchor", function(d){
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var d2 = interpolate(t);
				return midAngle(d2) < Math.PI ? "start":"end";
			};
		});

	text.exit()
		.remove();

	/* ------- SLICE TO TEXT POLYLINES -------*/

	var polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(data), key);
	
	polyline.enter()
		.append("polyline")
		.on("click", function(d){
			gauge6.update(d.data.value);
		})
		.on('mouseover', function(d){
	      var hovered = d;

	      slice = svg.select(".slices").selectAll("path.slice")
	      slice.transition().duration(300).style("opacity", function(d){
	            if(hovered.data.label == d.data.label){
	                return 0.5;
	            }
	            else{
	                return 1.0;
	            }	      	
	      });

	      text = svg.select(".labels").selectAll("text");         
	      text.style("opacity", function(d){
	            if(hovered.data.label == d.data.label){
	                return 1.0;
	            }
	            else{
	                return 0.1;
	            }
	      });

	      polyline = svg.select(".lines").selectAll("polyline")
	      polyline.style("opacity", function(d){
	            if(hovered.data.label == d.data.label){
	                return 1.0;
	            }
	            else{
	                return 0.1;
	            }
	      });
		  d3.select(this).style("cursor", "pointer");

		});

	polyline.transition().duration(1000)
		.attrTween("points", function(d){
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var d2 = interpolate(t);
				var pos = outerArc.centroid(d2);
				pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
				return [arc.centroid(d2), outerArc.centroid(d2), pos];
			};			
		});
	
	polyline.exit()
		.remove();

	HoldOn.close();
};