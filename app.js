const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const intentChecker = require('./libs/intentChecker')
const replyDefault = require('./controllers/default')

const { greeting } = require('./intents/greeting')
const textMsg = require('./controllers/textMsg')

const { image } = require('./intents/image')
const imageMsg = require('./controllers/imageMsg')

const { video } = require('./intents/video')
const videoMsg = require('./controllers/videoMsg')

const { location } = require('./intents/location')
const locationMsg = require('./controllers/locationMsg')

const { button } = require('./intents/button')
const buttonMsg = require('./controllers/buttonMsg')

const { carousel } = require('./intents/carousel')
const carouselMsg = require('./controllers/carouselMsg')

const app = express()
const port = process.env.PORT || 4000
const token = process.env.CHANNEL_ACCESS_TOKEN

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', async (req, res) => {
  let events = req.body.events[0]
  console.log("🚀 ~ file: app.js ~ line 32 ~ app.post ~ events", events)
  if (events.type === 'message') {
    let text = events.message.text
    console.log("🚀 ~ file: app.js ~ line 27 ~ app.post ~ text", text)
    let checker = await intentChecker(text.toLowerCase())
    console.log("🚀 ~ file: app.js ~ line 29 ~ app.post ~ checker", checker)
    if (greeting.includes(checker)) {
      textMsg(token, events)
    } else if (image.includes(checker)) {
      imageMsg(token, events)
    } else if (video.includes(checker)) {
      videoMsg(token, events)
    } else if (location.includes(checker)) {
      locationMsg(token, events)
    } else if (button.includes(checker)) {
      buttonMsg(token, events)
    } else if (carousel.includes(checker)) {
      carouselMsg(token, events)
    }
    else {
      replyDefault(token, events)
    }
  }
  res.sendStatus(200)
})

app.listen(port)
