'use strict'
/* jshint esversion: 6, asi: true, node: true */
// util.js

// private
require('colors') // allow for color property extensions in log messages
var debug = require('debug')('WebSSH2')

const defaultCredentials = { username: null, password: null, privatekey: null }

exports.setDefaultCredentials = function (username, password, privatekey) {
  defaultCredentials.username = username
  defaultCredentials.password = password
  defaultCredentials.privatekey = privatekey
}

exports.defaultAuth = function defaultAuth (req, res, next) {

  // Apply configured default credentials
  req.session.username = defaultCredentials.username
  req.session.userpassword = defaultCredentials.password
  req.session.privatekey = defaultCredentials.privatekey
    
  next()
}

// takes a string, makes it boolean (true if the string is true, false otherwise)
exports.parseBool = function parseBool (str) {
  return (str.toLowerCase() === 'true')
}
