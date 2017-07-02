const EventEmitter = require('events')

class GameManager extends EventEmitter {
  constructor (server) {
    super()

    this.bombStatus = null
    this.phase = null
    this.lastRequestTime = 0
    this.winningTeam = null
    this.lastData = null
    const self = this

    server.on('gameData', function (data) {
      data = JSON.parse(data)
      self.lastRequestTime = data.provider.timestamp

      if (data !== self.lastData) {
        if (data.round) {
          if (data.round.phase !== self.phase) {
            self.phase = data.round.phase
            self.emit('phase', self.phase)
          }

          if (data.round.bomb !== self.bombStatus) {
            self.bombStatus = data.round.bomb
            self.emit('bomb', self.bombStatus)
          }

          if (data.round.win_team) {
            if (data.round.win_team !== self.winningTeam) {
              self.winningTeam = data.round.win_team
              self.emit('win', self.winningTeam)
            }
          } else {
            self.winningTeam = null
          }
        }
      }
      self.lastData = data
    })
  }
}

module.exports = GameManager
