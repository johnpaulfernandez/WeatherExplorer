const axios = require('axios')
const { Router } = require('express')

const router = Router()

/* GET forecast by zip code from Open Weather Map API */
router.get('/forecast', async (req, res, next) => {
  console.log(`Forecast zip ${req.query.zip}`)

  const weather = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${req.query.zip},us&units=imperial&appid=f610b9aea2e131f1fb86bb24bfb660eb`
  )

  let weatherParsed = {}
  let tempMax = weather.data.list.map(res => Math.floor(res.main.temp_max))
  let tempMin = weather.data.list.map(res => Math.floor(res.main.temp_min))
  let icon = weather.data.list.map(res => res.weather[0].icon)
  let description = weather.data.list.map(res => res.weather[0].description)
  let rain = weather.data.list.map(res => res.rain)
  let alldates = weather.data.list.map(res => res.dt)

  let weatherDates = []
  alldates.forEach((res) => {
    let jsdate = new Date(res * 1000)
    weatherDates.push(jsdate)
  })
  weatherParsed.id = weather.data.message
  weatherParsed.date = weatherDates
  weatherParsed.tempMax = tempMax
  weatherParsed.tempMin = tempMin
  weatherParsed.icon = icon
  weatherParsed.description = description
  weatherParsed.rain = rain
  res.json(weatherParsed)
})

module.exports = router
