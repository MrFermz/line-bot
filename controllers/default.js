const config = require('../config/config')
const reply = require('../libs/reply')

function replyDefault(token, events) {
  let replyToken = events.replyToken
  let text = config.defaultMsg
  let body = JSON.stringify({
    replyToken,
    messages: [
      {
        type: 'text',
        text: text,
      },
    ],
  })
  reply(token, body)
}

module.exports = replyDefault