import { messages } from "./const.js"
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'

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

export const displayCurrentPath = () => {
  return `You are currently in ${process.cwd()}`
}

export const sortByNameAcs = (arr) => {
  return arr.sort((a, b) => a.name - b.name)
}

export const useStreams = async (sourceFile, destinationPath, compressionFunc) => {
  const readStream = createReadStream(sourceFile)
  const writableStream = createWriteStream(destinationPath)
  await pipeline(readStream, compressionFunc, writableStream)
}
