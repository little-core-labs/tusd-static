const { platform } = process

try {
  module.exports = require(`tusd-static-${platform}`)
} catch (err) {
  const message = 'Unable to resolve a static `tusd(1)` binary for platform: ' + platform
  throw new Error(message)
}
