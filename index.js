import * as readline from 'readline'
import { homedir } from 'os'
import { messages } from './helpers/const.js'
import { commands } from './handles/index.js'
import { displayCurrentPath, finishProcess } from './helpers/helpers.js'

async function commandExecutionProgram(command) {
  const commandsInfo = command.split(' ')
  try {
    if (commandsInfo[0].trim() in commands) {
      try {
        await commands[commandsInfo[0]](commandsInfo.splice(1).join())
        console.log(displayCurrentPath())
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
  await rl.prompt()
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
})
console.log(messages.greetings)
process.chdir(homedir())
console.log(displayCurrentPath())
rl.prompt()
rl.on('line', (input) => commandExecutionProgram(input))
  .on('SIGINT', () => {
    finishProcess()
  })
  .on('close', () => {
    finishProcess()
  })
