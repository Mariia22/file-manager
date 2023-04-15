import { createHash } from 'crypto'
import { createReadStream } from 'fs'
import { resolve } from 'path'
import { Writable } from 'stream'
import { pipeline } from 'stream/promises'

export const hash = async (path) => {
  const normalizePath = resolve(path)
  const content = createReadStream(normalizePath)
  const hash = createHash('sha256')
  const output = new Writable({
    decodeStrings: false, write(chunk, _, callback) {
      console.log(chunk)
      callback()
    }
  })
  await pipeline(content, hash.setEncoding('hex'), output)
}
