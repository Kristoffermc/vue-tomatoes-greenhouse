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
    import RestService from "../services/RestService";

    const restService = new RestService();

    let temperatures = [];
    let humidity = [];
    let soil = [];
    let light = [];


    export default {
        name: "Graphs",
        data: () => ({
            temperatures: [],
            chartOptionsBar: {
                xAxis: {
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: "Temperature",
                        type: 'bar',
                        data: temperatures,
                        color: ['#ff002c']
                    },
                    {
                        name: "Humidity",
                        type: 'bar',
                        data: humidity,
                        color: ['#00F']
                    },
                    {
                        name: "Soil",
                        type: 'bar',
                        data: soil,
                        color: ['#00ff01']
                    },
                    {
                        name: "Light",
                        type: 'bar',
                        data: light,
                        color: ['#ffff00']
                    }
                ],
                legend: {
                    bottom: 10,
                    left: 'center',
                    data: ['Temperature', 'Humidity', 'Soil', 'Light']
                },
                tooltip: {},
                title: {
                    text: 'Sensor data',
                    x: 'center',
                    textStyle: {
                        fontSize: 24
                    }
                },
            },


            chartOptionsLine: {
                title: {
                    text: "Temperature",
                    x: "center",
                    textStyle: {
                        fontSize: 24
                    }
                },
                axisPointer: {
                    show: "true"
                },
                xAxis: {
                    data: [],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        name: "Temperature",
                        type: "line",
                        data: temperatures,
                        color: ["#ff0000"]
                    },
                    {
                        name: "Humidity",
                        type: "line",
                        data: humidity,
                        color: ["#00F"]
                    },
                    {
                        name: "Soil",
                        type: "line",
                        data: soil,
                        color: ["#00ff0c"]
                    },
                    {
                        name: "Light",
                        type: 'line',
                        data: light,
                        color: ['#ffff00']
                    }
                ],
                legend: {
                    bottom: 10,
                    left: 'center',
                    data: ['Temperature', 'Humidity', 'Soil', 'Light']
                },
                tooltip: {}
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
        }),
        methods: {
            getTemperature(count) {
                restService.getSensorDataByType("temperature", count).then(res => {
                    for (let i = 0; i < res.data.data.length; i++) {
                        temperatures.push(parseFloat(res.data.data[i].value));
                    }
                });
            },
            getHumidity(count) {
                restService.getSensorDataByType("humidity", count).then(res => {
                    for (let i = 0; i < res.data.data.length; i++) {
                        humidity.push(parseFloat(res.data.data[i].value));
                    }
                });
            },
            getLight(count) {
                restService.getSensorDataByType("light" ,count).then(res => {
                    for (let i = 0; i < res.data.data.length; i++) {
                        light.push(parseFloat(res.data.data[i].value));
                    }
                });
            },
            getSoil(count) {
                restService.getSensorDataByType("soil", count).then(res => {
                    for (let i = 0; i < res.data.data.length; i++) {
                        soil.push(parseFloat(res.data.data[i].value));
                    }
                });
            }
        },
        created: function() {
            this.getTemperature(200);
            this.getHumidity(200);
            this.getLight(200);
            this.getSoil(200);
        }
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
