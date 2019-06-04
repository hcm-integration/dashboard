Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// -- Area Chart Example
var ctx = document.getElementById("myMixedChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,mixedChart,
    options: options
});

var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            label: 'Line Dataset',
            data: [50, 50, 50, 50],

            // Changes this dataset to become a line
            type: 'line'
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: options
});