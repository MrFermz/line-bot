const _ = require('lodash')
const reply = require('../libs/reply')
const { buttonReply } = require('../intents/button')

function buttonMsg(token, events) {
  let replyToken = events.replyToken
  let button = _.shuffle(buttonReply)[0]
  let body = JSON.stringify({
    replyToken,
    messages: [
      {
        type: 'template',
        altText: button.altText,
        template: button.template
      },
    ],
  })
  console.log("🚀 ~ file: replyMsg.js ~ line 22 ~ replyMsg ~ body", body)
  reply(token, body)
}

module.exports = buttonMsg