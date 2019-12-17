const { createLogger, format, transports } = require('winston')
const { combine } = format

const logger = createLogger({
  format: combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.json(),
    format.colorize()
  ),
  transports: [
    new transports.Console()
  ]
})

module.exports = logger