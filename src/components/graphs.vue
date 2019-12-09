<template>
    <div>
        <div class="chart-wrapper">
            <chart :options="chartOptionsBar"></chart>
        </div>

        <div class="chart-wrapper">
            <chart :options="chartOptionsLine"></chart>
        </div>

        <div class="chart-wrapper">
            <chart :options="chartOptionsRadar"></chart>
        </div>
    </div>
</template>

<script>
    export default {
        name: "graphs",
        data: () => ({
            chartOptionsBar: {
                xAxis: {
                    data: ['Q1', 'Q2', 'Q3', 'Q4']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        type: 'bar',
                        data: [63, 75, 24, 92]
                    }
                ],
                tooltip: {},
                title: {
                    text: 'Quarterly Sales Results',
                    x: 'center',
                    textStyle: {
                        fontSize: 24
                    }
                },
                color: ['#00F']
            },
            chartOptionsLine: {
                xAxis: {
                    data: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ]
                },
                yAxis: {
                    type: "value"
                },
                tooltip: {},
                series: [
                    {
                        type: "line",
                        data: [55, 72, 84, 48, 59, 62, 87, 75, 94, 101, 127, 118]
                    }
                ],
                title: {
                    text: "Monthly Stock Prices",
                    x: "center",
                    textStyle: {
                        fontSize: 24
                    }
                },
                color: ["#00F"]
            },
            chartOptionsRadar : {
                title: {
                    text: 'Basic Radar Chart',
                    x: "center",
                    textStyle: {
                        fontSize: 24
                    }
                },
                color: ["#00F"],
                tooltip: {},
                legend: {
                    bottom: 5,
                    data: ['Actual plant conditions', 'Optimal plant conditions'],
                    itemGap: 20,
                    textStyle: {
                        color: '#000000',
                        fontSize: 14
                    },
                    selectedMode: 'multiple'
                },
                radar: {
                    name: {
                        textStyle: {
                            color: '#ffffff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: 'Light', max: 6500},
                        { name: 'Air Humidity', max: 16000},
                        { name: 'Soil Humidity', max: 30000},
                        { name: 'Temperature', max: 38000}
                    ]
                },
                // The two different data inputs
                // Data input 1
                series: [{
                    name: 'Actual plant conditions',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            color: '#FF0000'
                        }
                    },
                    data : [
                        {
                            value : [4300, 10000, 20000, 29000],
                            name : 'Actual plant conditions'
                        }
                    ]
                },
                    // Data input 2
                    {
                        name: 'Optimal plant conditions',
                        type: 'radar',
                        itemStyle: {
                            normal: {
                                // color: '#F9713C'

                                color:
                                    '#0000FF'

                                /*
                                {

                                type: 'linear',
                                colorStops: [{
                                    offset: 0, color: 'red' // color at 0% position
                                }, {
                                    offset: 1, color: 'blue' // color at 100% position
                                }],
                                global: false // false by default

                            }
                             */
                            }
                        },
                        data : [
                            {
                                //value : [5000, 14000, 28000, 31000],
                                value : [6500, 16000, 30000, 38000],
                                name : 'Optimal plant conditions'
                            }
                        ]
                    }]
            }
        })
    }
</script>

<style scoped>
    .chart-wrapper {
        width: 100%;
        height: 700px;
    }

    .echarts {
        width: 100%;
        height: 100%;
    }
</style>
