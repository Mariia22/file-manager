import { createBrotliCompress } from 'zlib'
import { resolve, parse } from 'path'
import { useStreams } from '../helpers/helpers.js'
import { messages } from '../helpers/const.js'

export const compressFile = async (paths) => {
  if (!paths) {
    console.log(messages.compressError)
  }
  const [source, destination] = paths.split(',')
  const sourceFile = resolve(source)
  const { base } = parse(sourceFile)
  const fileName = `${base}.br`
  const destinationPath = resolve(destination, fileName)
  const brotlitCompress = createBrotliCompress()
  useStreams(sourceFile, destinationPath, brotlitCompress)
}
