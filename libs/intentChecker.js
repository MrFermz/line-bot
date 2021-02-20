const _ = require('lodash')
const { greeting } = require('../intents/greeting')
const { image } = require('../intents/image')
const { video } = require('../intents/video')
const { location } = require('../intents/location')
const { button } = require('../intents/button')
const { carousel } = require('../intents/carousel')

const lists = [greeting, image, video, location, button, carousel]

function intentChecker(text) {
  return new Promise((resovle, reject) => {
    let word = []
    for (let i = 0; i < lists.length; i++) {
      word = _.filter(lists[i], x => { return x.includes(text) })
      if (word && word.length > 0) break
    }
    if (word && word.length > 0) {
      resovle(word[0])
    } else {
      resovle('')
    }
  })
}

module.exports = intentChecker