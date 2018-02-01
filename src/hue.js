const hue = require('node-hue-api')
const config = require('./config')

const HueApi = hue.HueApi

class HueController {
  constructor (ip, username) {
    this.host = ip

    this.username = username

    this.api = new HueApi(this.host, this.username)
  }

  _setColour (x, y) {
    const state = hue.lightState.create().on().xy(x, y)
    this.api.setGroupLightState(config.hue.GROUP_ID, state, function (err, result) {
      if (err) console.log(err)
    })
  }

  setWhite () {
    const state = hue.lightState.create().on().white(154, 70)
    this.api.setGroupLightState(config.hue.GROUP_ID, state, function (err, result) {
      if (err) console.log(err)
    })
  }

  setRed () {
    this._setColour(config.colour.red)
  }

  setGreen () {
    this._setColour(config.colour.green)
  }

  setNeutral () {
    this._setColour(config.colour.neutral)
  }

  setCT () {
    this._setColour(config.colour.ct)
  }

  setT () {
    this._setColour(config.colour.t)
  }
}

module.exports = HueController
