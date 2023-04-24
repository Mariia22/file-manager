import { createReadStream } from 'fs'
import { resolve } from 'path'
import { Writable } from 'stream'
import { pipeline } from 'stream/promises'

export const readFile = async (pathToFile) => {
  const normalizePath = resolve(pathToFile)
  const content = createReadStream(normalizePath, { encoding: 'utf-8' })
  const output = new Writable({
    decodeStrings: false, write(chunk, _, callback) {
      console.log(chunk)
      callback()
    }
  })
  await pipeline(content, output)
}
