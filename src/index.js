import Chart from '../node_modules/chart.js'

const ctxDoughnutChart = document.getElementById("doughnutChart").getContext("2d")


const dataDoughnutChart = {
    labels: [
        "Dålig sömn*",
        "Okej sömn*"
    ],
    datasets: [
        {
            data: [33, 66],
            backgroundColor: [
                "#FF6384",
                "#eeeeee"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#eeeeee"
            ]
        }]
};

var myDoughnutChart = new Chart(ctxDoughnutChart, {
    type: 'doughnut',
    data: dataDoughnutChart,
    options: Chart.defaults.Doughnut
});
