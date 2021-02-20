const _ = require('lodash')
const reply = require('../libs/reply')
const { greetingReply } = require('../intents/greeting')

function textMsg(token, events) {
  let replyToken = events.replyToken
  let text = _.shuffle(greetingReply)[0]
  let body = JSON.stringify({
    replyToken,
    messages: [
      {
        type: 'text',
        text: text,
      },
    ],
  })
  console.log("🚀 ~ file: replyMsg.js ~ line 22 ~ replyMsg ~ body", body)
  reply(token, body)
}

module.exports = textMsg