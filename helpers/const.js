import { fileURLToPath } from 'url'
import { resolve } from 'path'
import { getUserName } from './helpers.js'

const strangerName = 'Unknown'
const args = getUserName();
const username = args['--username'] ? args['--username'] : strangerName
const pathname = resolve(fileURLToPath(import.meta.url))

export const messages = {
  greetings: `Welcome to the File Manager, ${username}!`,
  farewell: `Thank you for using File Manager, ${username}, goodbye!`,
  currentPath: `You are currently in ${pathname}`,
  invalidMessage: 'Invalid input',
  failedMessage: 'Operation failed'
}


