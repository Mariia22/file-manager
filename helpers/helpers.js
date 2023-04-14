import { messages } from "./const.js"

export const finishProcess = () => {
  console.log(messages.farewell)
  process.exit()
}

export const getUserName = () => {
  return Object.fromEntries(process.argv.slice(2).map(arg => {
    const [key, value] = arg.split('=')
    return [key, value]
  }))
}
