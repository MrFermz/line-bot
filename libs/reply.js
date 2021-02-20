const request = require('request')
const config = require('../config/config')

function reply(token, data) {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  request.post({
    url: `${config.apiMsg}/reply`,
    headers: headers,
    body: data,
  }, (err, res, body) => {
    console.log('status = ' + res.statusCode)
  })
}

module.exports = reply