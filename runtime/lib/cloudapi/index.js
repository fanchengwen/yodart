'use strict'

var device = require('./bind')
var MqttAgent = require('./mqtt')
var sendConfirm = require('./sendConfirm')

var CONFIG = null

exports.connect = function () {
  return new Promise((resolve, reject) => {
    device.bindDevice()
      .then((config) => {
        CONFIG = config
        resolve(new MqttAgent(config))
      })
      .catch(reject)
  })
}

exports.sendConfirm = function (appId, intent, slot, options, attrs, callback) {
  sendConfirm(appId, intent, slot, options, attrs, CONFIG, callback)
}