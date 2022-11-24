// kode hentet fra https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html og https://www.youtube.com/watch?v=0KlwBn8JO5I 

var canvasElement = document.getElementById("topicalPage3");
var config = {
    type: "bar",
    data: {
        labels: ["Total", "Men", "Women", "18 - 29 yrs", "30 - 39 yrs", "40 - 49 yrs", "50 - 59 yrs", "60 - 80 yrs"], 
        datasets: [{
            label: "Very well equipped", 
            data: [16, 23, 10, 40, 21, 13, 5, 4],
            backgroundColor: '#a9d18e',
        },{
            label: "Well equipped", 
            data: [42, 40, 43, 39, 47, 46, 47, 34],
            backgroundColor: '#c5e0b4',
        },{
            label: "Moderately equipped", 
            data: [23, 21, 26, 13, 16, 29, 32, 27],
            backgroundColor: '#adb9ca',
        },{
            label: "Not well equipped", 
            data: [13, 11, 15, 5, 14, 7, 10, 25],
            backgroundColor: '#f4b183',
        },{
            label: "Not at all well equipped", 
            data: [3, 3, 3, 1, 11, 2, 4, 7],
            backgroundColor: '#f8caad',
        },{
            label: "Undecided", 
            data: [3, 2, 3, 3, 1, 3, 2, 4],
            backgroundColor: '#ffe698',
        },
    ],  
    },
    options: {
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