<template>
  <section>
    <div class="row">
      <div class="col-12 d-flex">
        <b-button-group class="mb-3 ml-auto mr-4">
          <div v-for="(value, index) in daysOfWeek" :key="index">
            <span>
              <b-button class="btn btn-light ml-3" :ref="'dayFilter' + index" @click="filterByDay(value, index)">{{ value }}</b-button>
            </span>
          </div>
          <b-button class="btn btn-light ml-3 active" ref="dayFilter5" @click="filterByWeekUsingHighCharts()">5 Days</b-button>
        </b-button-group>
      </div>
    </div>

    <div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </section>
</template>

<script>
const moment = require('moment')

export default {
  data () {
    return {
      weatherDates: [],
      weatherTemps: [],
      daysOfWeek: [],
      xAxisLabelFormat: '',
      lastChartShown: 'dayFilter5',
      chartOptions: {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: null
        },

        subtitle: {
          text: ''
        },

        xAxis: {
          categories: this.weatherDates,
          labels: {
            format: this.xAxisLabelFormat
          }
        },

        yAxis: {
          title: {
            text: null
          },
          max: 100,
          enabled: false,
          visible: false
        },
        time: {
          useUTC: false
        },

        plotOptions: {
          series: {
            lineColor: 'rgb(255, 204, 0)',
            marker: {
              fillColor: '#FFFFFF',
              lineWidth: 0.5,
              lineColor: 'rgb(255, 204, 0)'
            }
          }
        },

        series: [
          {
            name: '°F',
            data: this.weatherTemps,
            color: 'rgb(255, 245, 204)',
            showInLegend: false
          }
        ],

        tooltip: {
          pointFormat: '<b>{point.y}</b>',
          valueSuffix: ' °F',
          shared: true
        },

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
                }
              }
            }
          ]
        }
      }
    }
  },
  computed: {
    weather () {
      return this.$store.state.forecast.weather
    }
  },
  created () {
    this.filterByWeekUsingHighCharts()
    this.get5Days()
  },
  methods: {
    get5Days () {
      this.daysOfWeek = []

      let nextDay = this.weather.date[0]

      for (let i = 1; i <= 5; i += 1) {
        nextDay = moment().day(moment(nextDay).isoWeekday() + 1) // returns a moment date object
        this.daysOfWeek.push(moment(nextDay).format('ddd'))
      }
    },
    filterByDay (day, index) {
      this.xAxisLabelFormat = '{value: %I %p}'

      const startIdx = this.weather.date.findIndex(
        date =>
          moment(date).isoWeekday() ===
          moment()
            .day(day)
            .isoWeekday()
      )

      this.weatherTemps = []
      this.weatherDates = []

      for (let i = startIdx; i < startIdx + 8; i += 1) {
        this.weatherTemps.push(this.weather.tempMax[i])
        this.weatherDates.push(moment(this.weather.date[i]))
      }

      if (this.lastChartShown === 'dayFilter5') {
        this.$refs[this.lastChartShown].classList.remove('active')
      } else {
        this.$refs[this.lastChartShown]['0'].classList.remove('active')
      }

      if (this.$refs[`dayFilter${index}`]['0'].classList !== undefined) {
        this.$refs[`dayFilter${index}`]['0'].classList.add('active')
        this.lastChartShown = `dayFilter${index}`
      }
    },
    filterByWeekUsingHighCharts () {
      this.weatherDates = []
      this.weatherTemps = []
      this.xAxisLabelFormat = '{value: %e}'

      for (let i = 0; i < this.weather.date.length; i += 1) {
        this.weatherDates.push(moment(this.weather.date[i]))
        this.weatherTemps.push(this.weather.tempMax[i])
      }

      if (this.lastChartShown !== 'dayFilter5') {
        this.$refs[this.lastChartShown]['0'].classList.remove('active')
      }

      if (this.$refs.dayFilter5 !== undefined) {
        this.$refs.dayFilter5.classList.add('active')
        this.lastChartShown = 'dayFilter5'
      }
    }
  },
  watch: {
    weatherTemps () {
      this.chartOptions.series[0].data = this.weatherTemps
    },
    weatherDates () {
      this.chartOptions.xAxis.categories = this.weatherDates
    },
    xAxisLabelFormat () {
      this.chartOptions.xAxis.labels.format = this.xAxisLabelFormat
    }
  }
}
</script>

<style>
.chart-filter {
  margin-left: auto;
}
</style>
