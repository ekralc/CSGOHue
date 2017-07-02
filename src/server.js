const http = require('http')
const EventEmitter = require('events')

class Server extends EventEmitter {

  constructor (port) {
    super()
    this.port = port

    const self = this

    const server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
        res.writeHead(200, {'Content-Type': 'text/html'})

        req.on('data', function (data) {
          self.emit('gameData', data)
        })

        req.on('end', function () {
          res.end('')
        })
      }
    })

    server.listen(this.port, '127.0.0.1')
  }
}

module.exports = Server
