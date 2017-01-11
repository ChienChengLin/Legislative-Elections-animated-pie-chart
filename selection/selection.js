$(document).ready(function() {
  
  $(".selLabel").click(function () {
    $('.dropdown').toggleClass('active');
  });
  
  $(".dropdown-list li").click(function() {
	HoldOn.open({
		theme:"sk-cube-grid"
	});
	
  	if($(this).attr('data-value') == 1){
		color = d3.scale.ordinal()
			.domain(["民主進步黨", "中國國民黨", "時代力量", "親民黨", "無黨團結聯盟"])
			.range(["#55AA00", "#0044BB", "#FFD700", "#FF8C00", "#B22222"]);

		data_array = [{label: "民主進步黨", value: 68}, {label: "中國國民黨", value: 35}, {label: "時代力量", value: 5}, {label: "親民黨", value: 3}, {label: "無黨團結聯盟", value: 2}];

		change(data_array);
  	}
  	else if($(this).attr('data-value') == 2){
		color = d3.scale.ordinal()
			.domain(["中國國民黨", "民主進步黨", "台灣團結聯盟", "親民黨", "無黨團結聯盟"])
			.range(["#0044BB", "#55AA00", "#DDAA00", "#FF8C00", "#B22222"]);

		data_array = [{label: "中國國民黨", value: 64}, {label: "民主進步黨", value: 40}, {label: "台灣團結聯盟", value: 3}, {label: "親民黨", value: 3}, {label: "無黨團結聯盟", value: 2}];

		change(data_array);
  	}
  	else if($(this).attr('data-value') == 3){
		color = d3.scale.ordinal()
			.domain(["中國國民黨", "民主進步黨", "無黨團結聯盟", "親民黨"])
			.range(["#0044BB", "#55AA00", "#B22222", "#FF8C00"]);

		data_array = [{label: "中國國民黨", value: 81}, {label: "民主進步黨", value: 27}, {label: "無黨團結聯盟", value: 3}, {label: "親民黨", value: 1}];

		change(data_array);
  	} 
  	else if($(this).attr('data-value') == 4){
		color = d3.scale.ordinal()
			.domain(["民主進步黨", "中國國民黨", "親民黨", "台灣團結聯盟", "無黨團結聯盟", "新黨"])
			.range(["#55AA00", "#0044BB", "#FF8C00", "#DDAA00", "#B22222", "#FFD700"]);

		data_array = [{label: "民主進步黨", value: 89}, {label: "中國國民黨", value: 79}, {label: "親民黨", value: 34}, {label: "台灣團結聯盟", value: 12}, {label: "無黨團結聯盟", value: 6}, {label: "新黨", value: 1}];

		change(data_array);
  	}
  	else if($(this).attr('data-value') == 5){
		color = d3.scale.ordinal()
			.domain(["民主進步黨", "中國國民黨", "親民黨", "台灣團結聯盟", "新黨", "台灣吾黨"])
			.range(["#55AA00", "#0044BB", "#FF8C00", "#DDAA00", "#FFD700", "#A9A9A9"]);

		data_array = [{label: "民主進步黨", value: 87}, {label: "中國國民黨", value: 68}, {label: "親民黨", value: 46}, {label: "台灣團結聯盟", value: 13}, {label: "新黨", value: 1}, {label: "台灣吾黨", value: 1}];

		change(data_array);
  	}
  	else if($(this).attr('data-value') == 6){
		color = d3.scale.ordinal()
			.domain(["中國國民黨", "民主進步黨", "新黨", "民主聯盟", "全國民主非政黨聯盟", "建國黨", "新國家連線"])
			.range(["#0044BB", "#55AA00", "#FFD700", "#FFFF33", "#FFFFBB", "#00DDDD", "#660077"]);

		data_array = [{label: "中國國民黨", value: 123}, {label: "民主進步黨", value: 70}, {label: "新黨", value: 11}, {label: "民主聯盟", value: 4}, {label: "全國民主非政黨聯盟", value: 3}, {label: "建國黨", value: 1}, {label: "新國家連線", value: 1}];

		change(data_array);
  	}
  	else if($(this).attr('data-value') == 7){
		color = d3.scale.ordinal()
			.domain(["中國國民黨", "民主進步黨", "新黨"])
			.range(["#0044BB", "#55AA00", "#FFD700"]);

		data_array = [{label: "中國國民黨", value: 85}, {label: "民主進步黨", value: 54}, {label: "新黨", value: 21}];

		change(data_array);
  	} 
  	else if($(this).attr('data-value') == 8){
		color = d3.scale.ordinal()
			.domain(["中國國民黨", "民主進步黨", "中華社會民主黨"])
			.range(["#0044BB", "#55AA00", "#FFFF33"]);

		data_array = [{label: "中國國民黨", value: 102}, {label: "民主進步黨", value: 51}, {label: "中華社會民主黨", value: 1}];

		change(data_array);
  	}
  	else if($(this).attr('data-value') == 9){
		color = d3.scale.ordinal()
			.domain(["中國國民黨", "民主進步黨"])
			.range(["#0044BB", "#55AA00"]);

		data_array = [{label: "中國國民黨", value: 94}, {label: "民主進步黨", value: 21}];

		change(data_array);
  	}	
    $('.selLabel').text($(this).text());
    $('.dropdown').removeClass('active');
    $('.selected-item p span').text($('.selLabel').text());
  });
  
});