import { resolve, parse } from 'path'
import { rename } from 'fs/promises'

export const renameFile = async (filenames) => {
  const [rawPathToFile, newFileName] = filenames.split(',')
  const oldPathToFile = resolve(rawPathToFile)
  const { dir } = parse(oldPathToFile)
  const newPathToFile = resolve(dir, newFileName)
  await rename(oldPathToFile, newPathToFile)
}
