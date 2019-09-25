// CONFIG('log') --> 'production' | 'developement'
const logger = require('../definitions/logger')[CONFIG('log')]

exports.install = function () {
  ROUTE('/', viewJson, ['post', 'get'])
}

function viewJson () {
  var self = this
  const log = logger()

  // Log Methid API
  // https://github.com/trentm/node-bunyan#log-method-api
  log.fatal('Fatal!!!')
  log.error('Error!!')
  log.warn('warning!')
  log.info({ mode: 'code' }, 'info...')
  log.debug({ mode: 'code' }, 'debug...')
  log.trace({ mode: 'code' }, 'trace...') // May not show in current config

  self.json({ date: Date() })
}
