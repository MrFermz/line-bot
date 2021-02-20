const _ = require('lodash')
const reply = require('../libs/reply')
const { locationReply } = require('../intents/location')

function locationMsg(token, events) {
  let replyToken = events.replyToken
  let location = _.shuffle(locationReply)[0]
  let body = JSON.stringify({
    replyToken,
    messages: [
      {
        type: 'location',
        title: location.title,
        address: location.address,
        latitude: location.latitude,
        longitude: location.longitude
      },
    ],
  })
  console.log("🚀 ~ file: replyMsg.js ~ line 22 ~ replyMsg ~ body", body)
  reply(token, body)
}

module.exports = locationMsg