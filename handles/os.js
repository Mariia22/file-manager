import { EOL, cpus, userInfo } from 'os'
import { messages } from '../helpers/const.js'

export const getOSinfo = async (command) => {
  const normalizeCommand = command.slice(2)
  const commandInterface = {
    'EOL': getEol,
    'cpus': getCpus,
    'homedir': getHomedir,
    'username': getUserName,
    'architecture': getArchitecture
  }
  Object.keys(commandInterface).includes(normalizeCommand) ? commandInterface[normalizeCommand]() : console.log(messages.osError)
}

const getEol = () => {
  console.log(JSON.stringify(EOL))
}

const getCpus = () => {
  const amount = cpus().length
  const info = cpus().reduce((acc, cpu) => {
    acc = [...acc, { model: cpu.model, speed: `${cpu.speed / 1000}GHz` }]
    return acc
  }, [])
  console.log(amount)
  console.table(info)
}

const getHomedir = () => {
  const { homedir } = userInfo()
  console.log(homedir)
}

const getUserName = () => {
  const { username } = userInfo()
  console.log(username)
}

const getArchitecture = () => {
  console.log(process.arch)
}
