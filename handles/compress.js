import { createReadStream, createWriteStream } from 'fs'
import { createBrotliCompress } from 'zlib'
import { pipeline } from 'stream/promises'
import { resolve, parse } from 'path'

export const compressFile = async (paths) => {
  if (!paths) {
    console.log("Command is not recognized. Add path to source file and destination folder")
  }
  const [source, destination] = paths.split(',')
  const sourceFile = resolve(source)
  const { base } = parse(sourceFile)
  const fileName = `${base}.br`
  const destinationPath = resolve(destination, fileName)
  const readStream = createReadStream(sourceFile)
  const writableStream = createWriteStream(destinationPath)
  const brotlitCompress = createBrotliCompress()
  await pipeline(readStream, brotlitCompress, writableStream)
}
