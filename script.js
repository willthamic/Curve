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
	
	var data = {
		labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
		datasets : [
			{
				fillColor : "rgba(99,123,133,0.4)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [65,54,30,81,56,55,40]
			},
			{
				fillColor : "rgba(219,186,52,0.4)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [20,60,42,58,31,21,50]
			},
		]
	}
			
	var scatter = document.getElementById("scatter");
	var scatter = scatter.getContext("2d");
	new Chart(scatter).Line(data, options);
	
	var bar = document.getElementById("bar");
	var bar = bar.getContext("2d");
	new Chart(bar).Bar(data, options);
			
}
size();


});