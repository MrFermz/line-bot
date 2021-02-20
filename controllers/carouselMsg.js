const _ = require('lodash')
const reply = require('../libs/reply')
const { carouselReply } = require('../intents/carousel')

function carouselMsg(token, events) {
  let replyToken = events.replyToken
  let carousel = _.shuffle(carouselReply)[0]
  let body = JSON.stringify({
    replyToken,
    messages: [
      {
        type: 'template',
        altText: carousel.altText,
        template: carousel.template
      },
    ],
  })
  console.log("🚀 ~ file: replyMsg.js ~ line 22 ~ replyMsg ~ body", body)
  reply(token, body)
}

module.exports = carouselMsg