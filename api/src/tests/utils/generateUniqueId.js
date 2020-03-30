const crypto = require('crypto')

function GenerateUniqueId () {
  return crypto.randomBytes(4).toString('HEX')
}

module.exports = GenerateUniqueId
