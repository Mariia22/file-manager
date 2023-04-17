import { createReadStream, createWriteStream } from 'fs'
import { createBrotliDecompress } from 'zlib'
import { pipeline } from 'stream/promises'
import { resolve, parse } from 'path'

export const decompressFile = async (paths) => {
  if (!paths) {
    console.log("Command is not recognized. Add path to source file and destination folder")
  }
  const [source, destination] = paths.split(',')
  const sourceFile = resolve(source)
  const { name } = parse(sourceFile)
  const destinationPath = resolve(destination, name)
  console.log(destinationPath)
  const readStream = createReadStream(sourceFile)
  const writableStream = createWriteStream(destinationPath)
  const brotlitDecompress = createBrotliDecompress()
  await pipeline(readStream, brotlitDecompress, writableStream)
}
