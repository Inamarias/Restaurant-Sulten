// kode hentet fra https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html og https://www.youtube.com/watch?v=0KlwBn8JO5I 

var canvasElement = document.getElementById("topicalPage1");
var config = {
    type: "bar",
    data: {
        labels: ["Total", "Men", "Women", "18 - 29 yrs", "30 - 39 yrs", "40 - 49 yrs", "50 - 59 yrs", "60 - 80 yrs"], 
        datasets: [{
            label: "Very reasonable", 
            data: [7, 10, 4, 14, 8, 7, 3, 4],
            backgroundColor: '#a9d18e',
        },{
            label: "Reasonable", 
            data: [35, 36, 34, 37, 35, 35, 35, 33],
            backgroundColor: '#c5e0b4',
        },{
            label: "Either/or", 
            data: [25, 26, 25, 23, 20, 28, 29, 27],
            backgroundColor: '#adb9ca',
        },{
            label: "Unreasonable", 
            data: [22, 18, 26, 18, 22, 24, 22, 22],
            backgroundColor: '#f4b183',
        },{
            label: "Highly unreasonable", 
            data: [8, 9, 8, 6, 10, 6, 9, 10],
            backgroundColor: '#f8caad',
        },{
            label: "Undecided", 
            data: [3, 2, 4, 2, 5, 0, 2, 4],
            backgroundColor: '#ffe698',
        },
    ],  
    },
    options: {
        maintainAspectRatio: false, 
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        }
    } 
};

var testChart = new Chart(canvasElement, config); 