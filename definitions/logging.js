const logger = require('./logger')[CONFIG('log')]

// This event is triggered if the HTTP request beings
// https://docs.totaljs.com/latest/en.html#api~Framework~F.on('request-begin'
F.on('request-begin', function (req) {
  req.$begin = Date.now()
})

// This event is triggered if the HTTP request ends
// https://docs.totaljs.com/latest/en.html#api~Framework~F.on('request-end')
F.on('request-end', function (req, res) {
  const log = logger()
  log.info({ httpReq: req, httpRes: res, mode: 'http' }, `[${((Date.now() - req.$begin) / 1000)}s]`)
})
