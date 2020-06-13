var ctx = document.getElementById('landingchart1').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Uncharged', 'Charged'],
        datasets: [{
            backgroundColor: ['rgb(100, 100, 200)', 'rgb(200, 100, 100)'],
            borderColor: 'rgba(0, 0, 0, 0)',
            data: [99, 1]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 10,
                    stepSize: 20,
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage',
                    fontColor: "white",
                    fontSize: 15,
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
});