<template>
  <section>
    <highcharts :options="chartOptions"></highcharts>
    <div v-for="(value, index) in daysOfWeek" :key="index" style="display:inline-block;">
      <span>
        <button class="btn btn-light" @click="filterByDay(value)">{{ value }}</button>
      </span>
    </div>
    <button class="btn btn-light" @click="filterByWeekUsingHighCharts">All Week</button>
  </section>
</template>

<script>
const moment = require('moment')

export default {
  props: ['weather'],
  data () {
    return {
      weatherDates: [],
      weatherTemps: [],
      weatherHourly: [],
      weatherTime: ['1 AM', '4 AM', '7 AM', '10 AM', '1 PM', '4 PM', '7 PM', '10 PM'],
      daysOfWeek: [],
      chartOptions: {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: '5-Day Weather Forecast'
        },

        subtitle: {
          text: ''
        },

        xAxis: {
          categories: this.weatherDates
        },

        yAxis: {
          title: {
            text: ''
          },
          max: 100,
          display: false
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'middle'
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
            color: 'rgb(255, 245, 204)'
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
    filterByDay (day) {
      const startIdx = this.weather.date.findIndex(
        date =>
          moment(date).isoWeekday() ===
          moment()
            .day(day)
            .isoWeekday()
      )

      this.weatherDates = []
      this.weatherTemps = []
      this.weatherDates = this.weatherTime

      for (let i = startIdx; i < startIdx + 8; i += 1) {
        this.weatherTemps.push(this.weather.tempMax[i])
      }
    },
    filterByWeekUsingHighCharts () {
      this.weatherDates = []
      this.weatherHourly = []
      this.weatherTemps = []

      for (let i = 0; i < this.weather.date.length; i += 1) {
        this.weatherDates.push(moment(this.weather.date[i]).format('ddd - hA'))

        this.weatherTemps.push(this.weather.tempMax[i])
      }
    }
  },
  watch: {
    weatherTemps () {
      this.chartOptions.series[0].data = this.weatherTemps
    },
    weatherDates () {
      this.chartOptions.xAxis.categories = this.weatherDates
    }
  }
}
</script>

<style>
</style>
