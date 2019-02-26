<template>
  <section class="container">
    <div class="card">
      <header>
        <chartjs-line
          v-if="showLine"
          :easing="easing"
          :pointborderwidth="pointborderwidth"
          :pointbordercolor="pointbordercolor"
          :pointhoverbackgroundcolor="pointhoverbackgroundcolor"
          :pointhoverbordercolor="pointhoverbordercolor"
          :fill="true"
          :backgroundcolor="bgColor"
          :bordercolor="borderColor"
          :bind="true"
          :data="this.weatherTemps"
          :labels="this.weatherDates"
          :option="option"
          :gridLines="gridLines"
        />
      </header>
    </div>
  </section>
</template>

<script>
const moment = require('moment')

export default {
  props: ['weather'],
  data () {
    return {
      showLine: false,
      weatherDates: [],
      weatherTemps: [],
      bgColor: 'rgb(255, 245, 204)',
      borderColor: 'rgb(255, 204, 0)',
      radio: 'today',
      easing: 'easeInBounce',
      pointborderwidth: 0,
      pointbordercolor: 'rgb(255, 204, 0)',
      pointhoverbackgroundcolor: 'rgb(255, 204, 0)',
      pointhoverbordercolor: 'rgb(255, 204, 0)',

      option: {
        responsive: true,
        maintainAspectRatio: true,
        showAllTooltips: true,
        legend: {
          display: false
        },

        tooltips: {
          displayColors: false,
          backgroundColor: 'transparent',
          bodyFontColor: 'rgb(181, 181, 181)',
          callbacks: {
            title: function (tooltipItem, data) {
              return null
            },
            label: function (tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']]
            },
            afterLabel: function (tooltipItem, data) {
              return null
            }
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 10,
                max: 120,
                callback: function (value, index, values) {
                  return ''
                }
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ]
        }
      },
      gridLines: {
        display: false
      }
    }
  },
  created () {
    this.filterByDay()
  },
  mounted () {
    this.showLine = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  methods: {
    filterByDay (day) {
      var today = new Date().getDate()
      if (day === 'tomorrow') today += 1

      this.weatherDates = []
      this.weatherTemps = []

      console.log(this.weather.date)
      for (let i = 0; i < this.weather.date.length; i += 1) {
        let date = moment(this.weather.date[i]).date()
        if (date === today || date === today + 1) {
          let hour = moment(this.weather.date[i]).hour()

          this.weatherDates.push(moment(hour, 'h:mm A').format('h A'))
          this.weatherTemps.push(this.weather.tempMax[i])
        }
      }
    },
    filterByWeek () {
      this.weatherDates = []
      this.weatherTemps = []
      let prevDay = new Date().getDay() - 1

      console.log(prevDay)

      for (let i = 0; i < this.weather.date.length; i += 1) {
        let day = moment(this.weather.date[i]).day()

        console.log(day)

        if (day === prevDay) {
          this.weatherDates.push('')
        } else {
          this.weatherDates.push(moment(this.weather.date[i]).format('ddd'))
          prevDay = day
        }
      }

      this.weatherTemps = this.weather.tempMax
    }
  }
}
</script>

<style>
ul {
  color: #7e7e79;
}
</style>
