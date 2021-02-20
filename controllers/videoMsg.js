const _ = require('lodash')
const reply = require('../libs/reply')
const { videoReply } = require('../intents/video')

function videoMsg(token, events) {
  let replyToken = events.replyToken
  let video = _.shuffle(videoReply)[0]
  let body = JSON.stringify({
    replyToken,
    messages: [
      {
        type: 'video',
        originalContentUrl: video.originalContentUrl,
        previewImageUrl: video.previewImageUrl
      },
    ],
  })
  console.log("🚀 ~ file: replyMsg.js ~ line 22 ~ replyMsg ~ body", body)
  reply(token, body)
}

module.exports = videoMsg