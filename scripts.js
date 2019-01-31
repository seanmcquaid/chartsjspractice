// line based chart

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Jan 30 2019", "Jan 29 2019", "Jan 28 2019", "Jan 27 2019", "Jan 26 2019", "Jan 25 2019", "Jan 24 2019"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options:{
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: "day"
                }
            }]
        }
    }
});