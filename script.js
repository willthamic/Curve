$(function(){
	
	var t;
function size(animate){
    clearTimeout(t);
    t = setTimeout(function(){
        $("canvas").each(function(i,el){
            $(el).attr({
                "width":$(el).parent().width(),
                "height":$(el).parent().outerHeight()
            });
        });
        redraw(animate);
        var m = 0;
        $(".widget").height("");
        $(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
        $(".widget").height(m);

    }, 100);
}
$(window).on('resize', size);
function redraw(animation){
    var options = {};
    if (!animation){
        options.animation = false;
    } else {
        options.animation = true;
    }
	
	var scatterdata = {
		datasets : [
			{
				fillColor : "rgba(0,0,0,0)",
				strokeColor : "rgba(255,0,0,0)",
				pointColor : "rgba(255,0,0,1)",
				pointStrokeColor : "#fff",
				data: [
					{ x: 19, y: 65 }, 
					{ x: 27, y: 59 }, 
					{ x: 28, y: 69 }, 
					{ x: 40, y: 81 },
					{ x: 48, y: 56 },
      			]
			},
			{
				fillColor : "rgba(0,0,0,0)",
				strokeColor : "rgba(0,0,255,0)",
				pointColor : "rgba(0,0,255,1)",
				pointStrokeColor : "#fff",
				data: [
					{ x: 19, y: 65 }, 
					{ x: 27, y: 59 }, 
					{ x: 28, y: 69 }, 
					{ x: 40, y: 81 },
					{ x: 48, y: 56 },
      			]			
			},
		]
	}
	var linedata = {
		labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
		datasets : [
			{
				fillColor : "rgba(0,0,0,0)",
				strokeColor : "rgba(255,0,0,1)",
				data : [65,54,30,81,56,55,40]
			},
			{
				fillColor : "rgba(0,0,0,0)",
				strokeColor : "rgba(0,0,255,1)",
				data : [20,60,42,58,31,21,50]
			},
		]
	}
			
	var scatter = document.getElementById("scatter");
	var scatter = scatter.getContext("2d");
	new Chart(scatter).Scatter(scatterdata, options);
	
	var line = document.getElementById("line");
	var line = line.getContext("2d");
	new Chart(line).Line(linedata, options);
			
}
size();


});