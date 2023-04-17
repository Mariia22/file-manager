import { getUserName } from './helpers.js'

const strangerName = 'Unknown'
const args = getUserName();
const username = args['--username'] ? args['--username'] : strangerName

export const messages = {
  greetings: `Welcome to the File Manager, ${username}!`,
  farewell: `Thank you for using File Manager, ${username}, goodbye!`,
  invalidMessage: 'Invalid input',
  failedMessage: 'Operation failed',
  compressError: "Command is not recognized. Add path to source file and destination folder"
}


