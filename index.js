import * as readline from 'readline'
import { messages } from './helpers/const.js'
import { commands } from './handles/index.js'
import { finishProcess } from './helpers/helpers.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
})
console.log(messages.greetings)
console.log(messages.currentPath)
rl.prompt()

rl.on('line', (input) => {
  try {
    if (input.trim() in commands) {
      try {
        commands[input]()
        console.log(messages.currentPath)
      }
      catch {
        throw new Error(messages.failedMessage)
      }
    } else {
      throw new Error(messages.invalidMessage)
    }
  } catch (error) {
    console.error(error.message)
  }
  rl.prompt()
})
  .on('SIGINT', () => {
    finishProcess()
  })
  .on('close', () => {
    finishProcess()
  })
