// kode hentet fra https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html og https://www.youtube.com/watch?v=0KlwBn8JO5I 

var canvasElement = document.getElementById("topicalPage");
var config = {
    type: "bar",
    data: {
        labels: ["Total", "Men", "Women", "18 - 29 yrs", "30 - 39 yrs", "40 - 49 yrs", "50 - 59 yrs", "60 - 80 yrs"],
        datasets: [{
            label: "Very positive", 
            data: [12, 14, 9, 22, 12, 12, 7, 6],
            backgroundColor: '#a9d18e',
        },{
            label: "Positive", 
            data: [40, 42, 37, 39, 42, 39, 43, 36],
            backgroundColor: '#c5e0b4',
        },{
            label: "Either/or", 
            data: [26, 23, 29, 23, 23, 25, 31, 28],
            backgroundColor: '#adb9ca',
        },{
            label: "Negative", 
            data: [15, 14, 15, 13, 15, 17, 12, 17],
            backgroundColor: '#f4b183',
        },{
            label: "Very negative", 
            data: [5, 4, 5, 2, 4, 3, 6, 8],
            backgroundColor: '#f8caad',
        },{
            label: "Undecided", 
            data: [4, 2, 5, 2, 4, 4, 2, 6],
            backgroundColor: '#ffe698',
        },
    ],  
    },
    options: {
        maintainAspectRatio: false, 
        plugins: {
         legend: {
          labels: {
            color: 'white'
            } 
        }         
    },
        
        
        scales: {
            x: {
                stacked: true,
                ticks: {
                   color: 'white' 
                }
                
            },
            y: {
                stacked: true,
                ticks: {
                    color: 'white' 
                 }
            }
        }
    } 
};

var testChart = new Chart(canvasElement, config); 