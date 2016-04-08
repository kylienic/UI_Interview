const _data = datajs.data;

var sum2013 = 0;
var sum2014 = 0;
var totalsum = 0;
var quarterSum2013 = [0,0,0,0];
var regionSum2013 = [0,0,0,0];
var quarterSum2014 = [0,0,0,0];
var regionSum2014 = [0,0,0,0];
var managerSum2013 = [0,0,0,0,0,0,0,0];
var managerSum2014 = [0,0,0,0,0,0,0,0];

// test to make sure data array read in properly
// expected value = 32
console.log("data length: " + Object.keys(_data).length);
var dataLength = Object.keys(_data).length;
for(i=0; i<dataLength; i++){
     // Parse by year
     if(_data[i].Year == 2013){
         // 1. Add to 2013 Sum
         sum2013 += parseInt(_data[i].Sales);
         totalsum += parseInt(_data[i].Sales);
         // 2. Count by Quarter
         switch (_data[i].Quarter){
            case 1:
                quarterSum2013[0] = quarterSum2013[0]+parseInt(_data[i].Sales); 
                break;
            case 2:
                quarterSum2013[1] = quarterSum2013[1]+parseInt(_data[i].Sales);
                break;
            case 3:
                quarterSum2013[2] = quarterSum2013[2]+parseInt(_data[i].Sales);
                console.log(quarterSum2013[2]);
                break;
            case 4:
                quarterSum2013[3] = quarterSum2013[3]+parseInt(_data[i].Sales);
                break;
            default: 
                break;
         }
        // 3. Count by Region
        switch(_data[i].Region){
            case "South East":
                regionSum2013[0] = regionSum2013[0]+parseInt(_data[i].Sales);
                break;
            case "North East":
                regionSum2013[1] = regionSum2013[1]+parseInt(_data[i].Sales);
                break;
            case "South West":
                regionSum2013[2] = regionSum2013[2]+parseInt(_data[i].Sales);
                break;
            case "North West":
                regionSum2013[3] = regionSum2013[3]+parseInt(_data[i].Sales);
                break;
            default: 
                break;
        } 
        //4. Count by Manager
        switch(_data[i].Manager){
            case "John":
                managerSum2013[0] = managerSum2013[0]+parseInt(_data[i].Sales);
                break;
            case "Leonardo":
                managerSum2013[1] = managerSum2013[1]+parseInt(_data[i].Sales);
                break;
            case "Paul":
                managerSum2013[2] = managerSum2013[2]+parseInt(_data[i].Sales);
                break;
            case "George":
                managerSum2013[3] = managerSum2013[3]+parseInt(_data[i].Sales);
                break;
            case "Michelangelo":
                managerSum2013[4] = managerSum2013[4]+parseInt(_data[i].Sales);
                break;
            case "Ringo":
                managerSum2013[5] = managerSum2013[5]+parseInt(_data[i].Sales);
                break;
            case "Raphael":
                managerSum2013[6] = managerSum2013[6]+parseInt(_data[i].Sales);
                break;
            case "Donatello":
                managerSum2013[7] = managerSum2013[7]+parseInt(_data[i].Sales);
                break;
            default: 
                break;
        }
     }
     else{
        // 2014 Values 
         sum2014 += parseInt(_data[i].Sales);
         totalsum += parseInt(_data[i].Sales);
         // 2. Count by Quarter
         switch (_data[i].Quarter){
            case 1:
                quarterSum2014[0] = quarterSum2014[0]+parseInt(_data[i].Sales); 
                break;
            case 2:
                quarterSum2014[1] = quarterSum2014[1]+parseInt(_data[i].Sales);
                break;
            case 3:
                quarterSum2014[2] = quarterSum2014[2]+parseInt(_data[i].Sales);
                break;
            case 4:
                quarterSum2014[3] = quarterSum2014[3]+parseInt(_data[i].Sales);
                break;
            default: 
                break;
         }
        // 3. Count by Region
        switch(_data[i].Region){
            case "South East":
                regionSum2014[0] = regionSum2014[0]+parseInt(_data[i].Sales);
                break;
            case "North East":
                regionSum2014[1] = regionSum2014[1]+parseInt(_data[i].Sales);
                break;
            case "South West":
                regionSum2014[2] = regionSum2014[2]+parseInt(_data[i].Sales);
                break;
            case "North West":
                regionSum2014[3] = regionSum2014[3]+parseInt(_data[i].Sales);
                break;
            default: 
                break;
        } 
        //4. Count by Manager
        switch(_data[i].Manager){
            case "John":
                managerSum2014[0] = managerSum2014[0]+parseInt(_data[i].Sales);
                break;
            case "Leonardo":
                managerSum2014[1] = managerSum2014[1]+parseInt(_data[i].Sales);
                break;
            case "Paul":
                managerSum2014[2] = managerSum2014[2]+parseInt(_data[i].Sales);
                break;
            case "George":
                managerSum2014[3] = managerSum2014[3]+parseInt(_data[i].Sales);
                break;
            case "Michelangelo":
                managerSum2014[4] = managerSum2014[4]+parseInt(_data[i].Sales);
                break;
            case "Ringo":
                managerSum2014[5] = managerSum2014[5]+parseInt(_data[i].Sales);
                break;
            case "Raphael":
                managerSum2014[6] = managerSum2014[6]+parseInt(_data[i].Sales);
                break;
            case "Donatello":
                managerSum2014[7] = managerSum2014[7]+parseInt(_data[i].Sales);
                break;
            default: 
                break;
        } 
    }
}

// concat all quarter data
var allQuarters = quarterSum2013.concat(quarterSum2014);
console.log("All quarters: " + allQuarters);

// test output 
console.log("Sum by Quarter for 2013: " + quarterSum2013[0] + " " + quarterSum2013[1] +" " + quarterSum2013[2] + " " + quarterSum2013[3]);

console.log("Sum by region for 2013: " + regionSum2013[0] + " " + regionSum2013[1] +" " + regionSum2013[2] + " " + regionSum2013[3]);

console.log("Sum by manager for 2013: " + managerSum2013[0] + " " + managerSum2013[1] +" " + managerSum2013[2] + " " + managerSum2013[3] + " " + managerSum2013[4] + " " + managerSum2013[5] + " " + managerSum2013[6] + " " + managerSum2013[7]);

console.log("Sum by Quarter for 2014: " + quarterSum2013[0] + " " + quarterSum2013[1] +" " + quarterSum2013[2] + " " + quarterSum2013[3]);
console.log("Sum by region for 2014: " + regionSum2013[0] + " " + regionSum2013[1] +" " + regionSum2013[2] + " " + regionSum2013[3]);
console.log("Sum by manager for 2014: " + managerSum2013[0] + " " + managerSum2013[1] +" " + managerSum2013[2] + " " + managerSum2013[3] + " " + managerSum2013[4] + " " + managerSum2013[5] + " " + managerSum2013[6] + " " + managerSum2013[3]);
// Test 2013 Algorithms
// 1. Test Quarter Algorithm
var qsum = 0;
for(i=0; i<4; i++){
    qsum += quarterSum2013[i];
}
console.log("Quarter Sum 2013: " + qsum);
// 2. Test Region Algorithm 
var rsum = 0;
for(i=0; i<4; i++){
    rsum += regionSum2013[i];
}
console.log("Region Sum 2013: " + rsum);
// 3. Test manager algorithm 
var msum = 0;
for(i=0; i<8; i++){
    msum += managerSum2013[i];
}
console.log("Manager Sum 2013: " + msum);
// 1. Test Quarter Algorithm 
var qsum = 0;
for(i=0; i<4; i++){
    qsum += quarterSum2014[i];
}
console.log("Quarter Sum 2014: " + qsum);
// 2. Test Region Algorithm 
var rsum = 0;
for(i=0; i<4; i++){
    rsum += regionSum2014[i];
}
console.log("Region Sum 2014: " + rsum);
// 3. Test manager algorithm 
var msum = 0;
for(i=0; i<8; i++){
    msum += managerSum2014[i];
}
console.log("Manager Sum 2014: " + msum);

// end tests

var totalManager = managerSum2013;
for(i=0; i<managerSum2013.length; i++)
	totalManager[i] += managerSum2014[i];

var totalManagerFrac = [0,0,0,0,0,0,0,0];
for(i=0; i<totalManagerFrac.length; i++)
	totalManagerFrac[i]=parseInt((totalManager[i]/totalsum)*100);
//
// Define Colors
//

var colors = {
    'red': '#031112',
    'red2': '#052224',
    'pink': '#083236', 
    'pink2': '#0a4347', 
    'purple': '#0d5459', 
    'purple2': '#0f656b', 
    'blue': '#12767d', 
    'blue2': '#14878f', 
    'cyan': '#16939c', 
    'cyan2': '#19a8b3', 
    'teal': '#1cb9c4',
    'teal2': '#1fcad6',
    'yellow': '#29d4e0',
    'yellow2': '#3bd8e3',
    'orange': '#4cdbe6', 
    'orange2': '#5edfe8',

};

//
// Create Charts
// Get the context of the canvas element we want to select
var ctx = document.getElementById("lineChart1").getContext("2d");
var data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
        {
            label: "2013",
            fillColor: "rgba(13,84,89, 0.5)",
            strokeColor: colors['purple'],
            pointColor: colors['purple'],
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: quarterSum2013
        },
        {
            label: "2014",
            fillColor: "rgba(22, 147, 156,0.2)",
            strokeColor: colors['cyan'],
            pointColor: colors['cyan'],
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: quarterSum2014
        }
    ]
};
var lineChart1 = new Chart(ctx).Line(data, {
			responsive: true,
        	scaleOverride : true,
        	scaleSteps : 10,
        	scaleStepWidth : 10000,
        	scaleStartValue : 0 
		});
// second chart
var ctx = document.getElementById("lineChart2").getContext("2d");
var data = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
    datasets: [
        {
            label: "",
            fillColor: "rgba(22, 147, 156,0.2)",
            strokeColor: colors['cyan'],
            pointColor: colors['cyan'],
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: allQuarters
        }
    ]
};
var lineChart2 = new Chart(ctx).Line(data, {
			responsive: true,
        	scaleOverride : true,
        	scaleSteps : 10,
        	scaleStepWidth : 10000,
        	scaleStartValue : 0 
		});
// first bar chart
var ctx = document.getElementById("barChart1").getContext("2d");
var data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
        {
            label: "2013",
           	fillColor: "rgba(22, 147, 156,0.2)",
            strokeColor: colors['cyan'],
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: quarterSum2013
        }
    ]
};
var lineChart2 = new Chart(ctx).Bar(data, {
			responsive: true,
			barStrokeWidth : 2
		});
// second bar chart
var ctx = document.getElementById("barChart2").getContext("2d");
var data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
        {
            label: "2014",
            fillColor: "rgba(22, 147, 156,0.2)",
            strokeColor: colors['cyan'],
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: quarterSum2014
        }
    ]
};
var lineChart2 = new Chart(ctx).Bar(data, {
			responsive: true,
			barStrokeWidth : 2
		});
// third bar chart
var ctx = document.getElementById("barChart3").getContext("2d");
var data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
        {
            label: "2013",
            fillColor: "rgba(13,84,89, 0.5)",
            strokeColor: colors['purple'],
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: quarterSum2013
        },
        {
            label: "2014",
            fillColor: "rgba(22, 147, 156,0.2)",
            strokeColor: colors['cyan'],
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: quarterSum2014
        }
    ]
};
var lineChart2 = new Chart(ctx).Bar(data, {
			responsive: true,
			barStrokeWidth : 2,
		});
// first pie chart
var ctx = document.getElementById("pieChart1").getContext("2d");
var data = [
    {
        value: totalManagerFrac[0],
        color: colors['red'],
        highlight: colors['red2'],
        label: "John"
    },
    {
        value: totalManagerFrac[1],
        color: colors['pink'],
        highlight: colors['pink2'],
        label: "Leonardo"
    },
    {
        value: totalManagerFrac[2],
        color: colors['purple'],
        highlight: colors['purple2'],
        label: "Paul"
    },
    {
        value: totalManagerFrac[3],
        color: colors['blue'],
        highlight: colors['blue2'],
        label: "George"
    },
    {
        value: totalManagerFrac[4],
        color: colors['cyan'],
        highlight: colors['cyan2'],
        label: "Michelangelo"
    },
    {
        value: totalManagerFrac[5],
        color: colors['teal'],
        highlight: colors['teal2'],
        label: "Ringo"
    },
    {
        value: totalManagerFrac[6],
        color:colors['yellow'],
        highlight: colors['yellow2'],
        label: "Raphael"
    },
    {
        value: totalManagerFrac[7],
        color: colors['orange'],
        highlight: colors['orange2'],
        label: "Donatello"
    }
]
var myPieChart = new Chart(ctx).Pie(data, {responsive: true,});
// second pie chart
var ctx = document.getElementById("pieChart2").getContext("2d");
var data = [
    {
        value: managerSum2013[0],
        color: colors['red'],
        highlight: colors['red2'],
        label: "John"
    },
    {
        value: managerSum2013[1],
        color: colors['pink'],
        highlight: colors['pink2'],
        label: "Leonardo"
    },
    {
        value: managerSum2013[2],
        color: colors['purple'],
        highlight: colors['purple2'],
        label: "Paul"
    },
    {
        value: managerSum2013[3],
        color: colors['blue'],
        highlight: colors['blue2'],
        label: "George"
    },
    {
        value: managerSum2013[4],
        color: colors['cyan'],
        highlight: colors['cyan2'],
        label: "Michelangelo"
    },
    {
        value: managerSum2013[5],
        color: colors['teal'],
        highlight: colors['teal2'],
        label: "Ringo"
    },
    {
        value: managerSum2013[6],
        color:colors['yellow'],
        highlight: colors['yellow2'],
        label: "Raphael"
    },
    {
        value: managerSum2013[7],
        color: colors['orange'],
        highlight: colors['orange2'],
        label: "Donatello"
    }
]
var myPieChart = new Chart(ctx).Pie(data, {responsive: true,});
// third pie chart
var ctx = document.getElementById("pieChart3").getContext("2d");
var data = [
    {
        value: managerSum2014[0],
        color: colors['red'],
        highlight: colors['red2'],
        label: "John"
    },
    {
        value: managerSum2014[1],
        color: colors['pink'],
        highlight: colors['pink2'],
        label: "Leonardo"
    },
    {
        value: managerSum2014[2],
        color: colors['purple'],
        highlight: colors['purple2'],
        label: "Paul"
    },
    {
        value: managerSum2014[3],
        color: colors['blue'],
        highlight: colors['blue2'],
        label: "George"
    },
    {
        value: managerSum2014[4],
        color: colors['cyan'],
        highlight: colors['cyan2'],
        label: "Michelangelo"
    },
    {
        value: managerSum2014[5],
        color: colors['teal'],
        highlight: colors['teal2'],
        label: "Ringo"
    },
    {
        value: managerSum2014[6],
        color:colors['yellow'],
        highlight: colors['yellow2'],
        label: "Raphael"
    },
    {
        value: managerSum2014[7],
        color: colors['orange'],
        highlight: colors['orange2'],
        label: "Donatello"
    }
]
var myPieChart = new Chart(ctx).Pie(data, {responsive: true,});