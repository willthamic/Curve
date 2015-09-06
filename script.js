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
finalGrades=[];
allGradesCurve=[];

function calculateCurve(startingGrades, typeOfCurve){

	if(typeOfCurve==0){
			//Linear Curve
	var curveConstant=parseInt(prompt("How much do you want to curve by?")); 
		for(var x=0;x<startingGrades.length;x++){
	finalGrades.push(startingGrades[x]+curveConstant);
		}
      for(var x=0;x<100;x++){
allGradesCurve.push(x+curveConstant);
}
		return finalGrades;
	}
	else if(typeOfCurve==1){
	//Lowest Grade scaled more than higher ones
	}
else if(typeOfCurve==2){
	// take the average of all the grades and add a tenth of the difference between each and the middle grade to itself--bell Curve no 1
		var totalScore=0
		var averageScore=0;
		var aveDiff=0;

	for(var x=0;x<startingGrades.length;x++){
		totalScore=totalScore+startingGrades[x];
	}
	averageScore=totalScore/startingGrades.length;
	for(var x=0;x<startingGrades.length;x++){	
		aveDiff=(startingGrades[x]-averageScore)/10;
		finalGrades.push(startingGrades[x]+aveDiff);
	}
for(var x=0;x<100;x++){	
		aveDiff=(x-averageScore)/10;
		allGradesCurve.push(x+aveDiff);
	}
return finalGrades;
	}


	else if(typeOfCurve==3){
//Bell Curve no 2
		var averageGrade=parseInt(prompt("What do you consider an average grade?"));
		var totalScore=0;
		var averageScore=0;
		var aveDiff=0;
		
	//Bell Curve
	for(var x=0;x<startingGrades.length;x++){
		totalScore=totalScore+startingGrades[x];
	}
	averageScore=totalScore/(startingGrades.length);
//console.log(averageScore)
		for(var x=0;x<startingGrades.length;x++){	
		aveDiff=startingGrades[x]-averageScore;
		finalGrades.push(averageGrade+aveDiff);
	}
for(var x=0;x<100;x++){	
		aveDiff=x-averageScore;
		allGradesCurve.push(averageGrade+aveDiff);
	}
return finalGrades;
	}
	else{
		return false;
	}
	
}


function CURVING(){
	//This function can be used to call calculateCurve should you not know the values of grades and type and want to have
	//manual control--MOSTLY FOR TESTING
var grades=prompt("startingGrades.  leave a space in between each number").split(" ");
var type=prompt("What type of curve");
for(var x=0;x<grades.length;x++){
grades[x]=parseInt(grades[x],10);
}calculateCurve(grades,type)}

