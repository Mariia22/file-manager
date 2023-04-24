import { resolve, parse } from 'path'
import { messages } from '../helpers/const.js'
import { useStreams } from '../helpers/helpers.js'
import { createBrotliDecompress } from 'zlib'

export const decompressFile = async (paths) => {
  if (!paths) {
    console.log(messages.compressError)
  }
  const [source, destination] = paths.split(',')
  const sourceFile = resolve(source)
  const { name } = parse(sourceFile)
  const destinationPath = resolve(destination, name)
  const brotlitDecompress = createBrotliDecompress()
  useStreams(sourceFile, destinationPath, brotlitDecompress)
}
