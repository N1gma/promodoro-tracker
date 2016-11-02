$(function () {
    Highcharts.chart('report-graph', {
        chart: {
            plotBackgroundColor: '#2a3f50',
            plotBorderWidth: 0,
            plotShadow: false,
            type: 'pie',
            innerSize: '40%',
            renderTo: 'container',
            spacing : [0, 0, 0, 0]
        },
        credits:{
            enabled:false
        },
        title: {
            text: '8',
            align: 'center',
            verticalAlign: 'middle',
            y: 10,
            style: {
                "color": "white",
                "fontSize": "70px"
            }

        },
        subtitle: {
            text: 'total',
            align: 'center',
            verticalAlign: 'middle',
            y: 35,
            style: {
                "color": "white",
                "fontSize": "18px"
            }

        },
        tooltip: {
            pointFormat: '<b>{series.name}: {point.y}</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        color: 'white',
                        cursor: 'pointer',
                        textShadow: false
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%'],
                borderWidth: 0,
                allowPointSelect: true,
                colors: ['#e05446', '#fba640', '#fcdb43', '#1ab99a', '#8da5b8'],
                cursor:'pointer',
                highlight:{
                    opacity: '0'
                }
            },
            series: {
                states: {
                    hover: {
                        halo: {
                            attributes: {
                                fill: '#fff'
                            },
                            opacity: '0.75'
                        }
                    }
                }
            }

        },
        series: [{
            name: 'Tasks',
            innerSize: '40%',
            keys: ['name', 'y' ],
            data: [
                ['Urgent',2],
                ['High',3],
                ['Medium',1],
                ['Low',6],
                ['Failed',3]
            ]
        }]
    });
});


