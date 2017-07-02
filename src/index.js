const Server = require('./server')
const Manager = require('./manager')
const HueController = require('./hue')

const config = require('./config')

const server = new Server(3000)

const manager = new Manager(server)

const hue = new HueController(config.hue.ip, config.hue.username)

manager.on('bomb', function (status) {
  switch (status) {
    case 'planted':
      hue.setRed()
      break
  }
})

manager.on('phase', function (status) {
  switch (status) {
    case 'live':
      hue.setNeutral()
      break
    case 'freezetime':
      hue.setWhite()
      break

  }
})

manager.on('win', function (winningTeam) {
  switch (winningTeam) {
    case 'T':
      hue.setT()
      break
    case 'CT':
      hue.setCT()
      break
  }
})
