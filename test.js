const test = require('tape')
const tusd = require('./')
const fs = require('fs')

test('tusd.path', (t) => {
  t.ok(tusd.path, 'tusd.path is ok')
  t.ok('string' === typeof tusd.path, 'tusd.path is a string')
  t.doesNotThrow(() => fs.accessSync(tusd.path), 'tusd.path is accessible')
  t.end()
})

test('tusd.path (permissions)', (t) => {
  const stat = fs.statSync(tusd.path)
  t.ok(stat.isFile(), 'tusd.path is a file')
  t.ok(stat.mode & fs.constants.S_IXUSR, 'tusd.path is executable')
  t.end()
})
