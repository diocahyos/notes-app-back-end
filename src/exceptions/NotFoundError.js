const ClientError = require('./ClientError')

class NotFoundError extends ClientError {
  constructor (messgae) {
    super(messgae)
    this.name = 'NotFoundError'
  }
}

module.exports = NotFoundError
