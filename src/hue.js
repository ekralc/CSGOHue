const hue = require('node-hue-api')
const config = require('./config')

const HueApi = hue.HueApi

const GROUP_ID = 1

class HueController {
  constructor (ip, username) {
    this.host = ip

    this.username = username

    this.api = new HueApi(this.host, this.username)
  }

  _setColour (x, y) {
    const state = hue.lightState.create().on().xy(x, y)
    this.api.setGroupLightState(GROUP_ID, state, function (err, result) {
      if (err) console.log(err)
    })
  }

  setWhite () {
    const state = hue.lightState.create().on().white(154, 70)
    this.api.setGroupLightState(GROUP_ID, state, function (err, result) {
      if (err) console.log(err)
    })
  }

  setRed () {
    this._setColour(config.colour.red[0], config.colour.red[1])
  }

  setGreen () {
    this._setColour(config.colour.green[0], config.colour.green[1])
  }

  setNeutral () {
    this._setColour(config.colour.neutral[0], config.colour.neutral[1])
  }

  setCT () {
    this._setColour(config.colour.ct[0], config.colour.ct[1])
  }

  setT () {
    this._setColour(config.colour.t[0], config.colour.t[1])
  }
}

module.exports = HueController
