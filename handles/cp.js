import { createReadStream, createWriteStream } from 'fs'
import { resolve, parse } from 'path'
import { pipeline } from 'stream/promises'

export const copyFile = async (paths) => {
  const [oldPath, newPath] = paths.split(',')
  const oldPathToFile = resolve(oldPath)
  const { base } = parse(oldPath)
  const newPathToFile = resolve(newPath, base)
  const readableStream = createReadStream(oldPathToFile)
  const writableStream = createWriteStream(newPathToFile)
  await pipeline(readableStream, writableStream)
}
