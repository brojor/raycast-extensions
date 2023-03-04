#!/usr/bin/env zx
// @raycast.schemaVersion 1
// @raycast.title JS to JSON
// @raycast.mode silent
// @raycast.icon 💻

$.verbose = false

const clipboardContent = await $`pbpaste`

function objectify(str) {
  return new Function(`return ${str}`)()
}

try {
  const object = objectify(clipboardContent)
  await $`echo ${JSON.stringify(object, null, 2)} | pbcopy`
  console.log('JS was converted to JSON')
} catch (error) {
  console.error('Object is not valid')
  process.exit(1)
}
