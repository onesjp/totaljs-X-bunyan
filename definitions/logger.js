const bunyan = require('bunyan')
const moment = require('moment')

// Constructor API
// https://github.com/trentm/node-bunyan#constructor-api
// Core fields
// https://github.com/trentm/node-bunyan#core-fields
const logger = {
  production: () => bunyan.createLogger({
    name: 'prod',
    level: 'info',
    hostname: 'api',
    // Adding a Stream
    // https://github.com/trentm/node-bunyan#adding-a-stream
    streams: [
      {
        level: 'info',
        path: `./logs/log.${moment().format('YYYY-MM-DD')}.log`
      },
      {
        level: 'error',
        path: `./logs/error.${moment().format('YYYY-MM-DD')}.log`
      },
      {
        level: 'warn',
        stream: process.stdout
      }
    ],
    serializers: {
      httpReq: httpReqSerializer,
      httpRes: httpResSerializer
    },
    time: moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
  }),
  developement: () => bunyan.createLogger({
    name: 'dev',
    level: 'debug',
    hostname: 'api',
    streams: [
      {
        level: 'debug',
        stream: process.stdout
      }
    ],
    // Serializers
    // https://github.com/trentm/node-bunyan#serializers
    serializers: {
      httpReq: httpReqSerializer,
      httpRes: httpResSerializer
    },
    time: moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
  })
}

function httpReqSerializer (req) {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers,
    ip: req.ip,
    post: req.body,
    query: req.query
  }
}

function httpResSerializer (res) {
  return {
    method: res.method,
    url: res.url,
    response: res.options,
    ip: res.ip,
    post: res.body,
    query: res.query
  }
}

module.exports = {
  production: logger.production,
  developement: logger.developement
}
