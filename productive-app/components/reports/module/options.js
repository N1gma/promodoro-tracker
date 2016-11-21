import {Model} from './Model'
export var options = {
    pieView: {
        chart: {
            plotBackgroundColor: '#2a3f50',
            plotBorderWidth: 0,
            plotShadow: false,
            type: 'pie',
            spacing: [0, 0, 0, 0],
            renderTo: 'report-graph'
        },

        credits: {
            enabled: false
        },

        title: {
            text: totalValueCount(),
            align: 'center',
            verticalAlign: 'middle',
            y: 15,
            style: {
                "color": "white",
                "fontSize": "70px",
                "fontFamily": "Roboto"
            }

        },

        subtitle: {
            text: 'total',
            align: 'center',
            verticalAlign: 'middle',
            y: 40,
            style: {
                "color": "white",
                "fontSize": "18px"
            }

        },

        tooltip: {
            pointFormatter: function () {
                return '<b>' + this.name.toUpperCase() + '</b><br><b>Tasks: ' + this.y + '</b>';
            },
            headerFormat: ''
        },

        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -30,
                    style: {
                        color: 'white',
                        cursor: 'pointer',
                        textShadow: false,
                        fontSize: '14px'
                    }
                },
                innerSize: '50%',
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%'],
                allowPointSelect: true,
                colors: ['#e05446', '#fba640', '#fcdb43', '#1ab99a', '#8da5b8'],
                cursor: 'pointer',
                highlight: {
                    opacity: '0'
                },
                borderColor: null
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
            keys: ['name', 'y'],
            data: ''
        }]
    },
    columnView: {
        chart: {
            backgroundColor: '#2a3f50',
            type: 'column',
            renderTo: 'report-graph',
            borderWidth: 0,
            style: {
                fontColor: 'white'
            }
        },
        title: null,
        subtitle: null,
        colors: ['#e05446', '#fba640', '#fcdb43', '#1ab99a', '#8da5b8'],
        legend: {
            symbolRadius: 0,
            style: {
                color: 'white'
            },
            itemStyle: {
                color: '#8198ab'
            },
            itemHoverStyle: {
                color: 'white'
            }
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
            allowDecimals: false,
            title: {
                text: null
            },
            gridLineColor: '#345168',
            tickWidth: 0,
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: null
            },
            lineColor: 'white',
            lineWidth: 1,
            gridLineColor: '#345168',
            tickColor: "white",
            minorTickColor: "white",
            labels: {
                style: {
                    color: 'white'
                }
            },
            tickInterval: 2
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                cursor: 'pointer'
            },
            series: {
                pointWidth: 28
            }
        },
        tooltip: {
            pointFormatter: function () {
                return '<b>' + this.series.name.toUpperCase() + '</b><br><b>Tasks: ' + this.y + '</b>';
            },
            headerFormat: ''
        },
        series: ''
    },
    columnViewMonthly: {
        chart: {
            backgroundColor: '#2a3f50',
            type: 'column',
            renderTo: 'report-graph',
            borderWidth: 0,
            style: {
                fontColor: 'white'
            }
        },
        title: null,
        subtitle: null,
        colors: ['#e05446', '#fba640', '#fcdb43', '#1ab99a', '#8da5b8'],
        legend: {
            symbolRadius: 0,
            style: {
                color: 'white'
            },
            itemStyle: {
                color: '#8198ab'
            },
            itemHoverStyle: {
                color: 'white'
            }
        },
        credits: {
            enabled: false
        },
        xAxis: {
            //categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
            allowDecimals: false,
            title: {
                text: null
            },
            tickInterval: 1,
            min: 1,
            max: 30,
            gridLineColor: '#345168',
            tickWidth: 0,
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: null
            },
            lineColor: 'white',
            lineWidth: 1,
            gridLineColor: '#345168',
            tickColor: "white",
            minorTickColor: "white",
            labels: {
                style: {
                    color: 'white'
                }
            },
            tickInterval: 2
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                cursor: 'pointer'
            },
            series: {
                //pointWidth: 28
            }
        },
        tooltip: {
            pointFormatter: function () {
                return '<b>' + this.series.name.toUpperCase() + '</b><br><b>Tasks: ' + this.y + '</b>';
            },
            headerFormat: ''
        },
        series: ''
    }
};
//mocks
 function pieDaily() { //get data from any source
    return [
        {
            name: 'Urgent',
            y: 2
        },
        {
            name: 'High',
            y: 3
        },
        {
            name: 'Medium',
            y: 1
        },
        {
            name: 'Low',
            y: 6
        },
        {
            name: 'Failed',
            y: 3
        }
    ];
}
function columnWeekly() {
    return [{
        name: 'Urgent',
        data: [5, 3, 4, 7, 2],
        stack: 'finished'
    }, {
        name: 'High',
        data: [3, 4, 4, 2, 5],
        stack: 'finished'
    }, {
        name: 'Middle',
        data: [2, 5, 6, 2, 1],
        stack: 'finished'
    }, {
        name: 'Low',
        data: [3, 0, 4, 4, 3],
        stack: 'finished'

    }, {
        name: 'Failed',
        data: [3, 6, 4, 4, 3],
        stack: 'failed'
    }
    ]
}
export function columnMonthly() {
    return [{
        name: 'Urgent',
        data: createRandom30xArray()
    }, {
        name: 'High',
        data: createRandom30xArray()
    }, {
        name: 'Middle',
        data: createRandom30xArray()
    }, {
        name: 'Low',
        data: createRandom30xArray()

    }, {
        name: 'Failed',
        data: createRandom30xArray()
    }
    ]
}

export function createRandom30xArray() {
    var data = [];
    var min = 1;
    var max = 6;
    for (var i = 1; i <= 31; i++) {
        data.push(parseInt(Math.random() * (max - min) + min));
    }
    return data;
}

export function totalValueCount() {
    var data = pieDaily();
    var tasksInTotal = 0;
    for (var i = 0; i < data.length; i++) {
        tasksInTotal += data[i].y;
    }
    return tasksInTotal;
}







