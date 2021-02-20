const _ = require('lodash')
const reply = require('../libs/reply')
const { imageReply } = require('../intents/image')

function imageMsg(token, events) {
  let replyToken = events.replyToken
  let image = _.shuffle(imageReply)[0]
  let body = JSON.stringify({
    replyToken,
    messages: [
      {
        type: 'image',
        originalContentUrl: image.originalContentUrl,
        previewImageUrl: image.previewImageUrl
      },
    ],
  })
  console.log("🚀 ~ file: replyMsg.js ~ line 22 ~ replyMsg ~ body", body)
  reply(token, body)
}

module.exports = imageMsg