// kode hentet fra https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html og https://www.youtube.com/watch?v=0KlwBn8JO5I 

var canvasElement = document.getElementById("topicalPage2");
var config = {
    type: "bar",
    data: {
        labels: ["Total", "Men", "Women", "18 - 29 yrs", "30 - 39 yrs", "40 - 49 yrs", "50 - 59 yrs", "60 - 80 yrs"], 
        datasets: [{
            label: "Primarily consumer needs/demands", 
            data: [6, 7, 5, 12, 7, 6, 2, 2],
            backgroundColor: '#a9d18e',
        },{
            label: "Primarily industry/market", 
            data: [60, 59, 60, 45, 56, 56, 68, 71],
            backgroundColor: '#c5e0b4',
        },{
            label: "Both", 
            data: [30, 31, 29, 36, 33, 33, 26, 24],
            backgroundColor: '#f8caad',
        },{
            label: "Undecided", 
            data: [5, 3, 6, 7, 5, 5, 4, 2],
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