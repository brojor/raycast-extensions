#!/usr/bin/env zx
// @raycast.schemaVersion 1
// @raycast.title JSON to JS
// @raycast.mode silent
// @raycast.icon 💻

import { stringify } from "javascript-stringify";

$.verbose = false
const clipboardContent = await $`pbpaste`

try {
    const json = JSON.parse(clipboardContent)
    await $`echo ${stringify(json, null, 2)} | pbcopy`
    console.log('JSON was converted to JS')
} catch (err) {
    console.error('Invalid JSON')
    process.exit(1)
}

