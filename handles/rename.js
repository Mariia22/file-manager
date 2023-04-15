import { resolve } from 'path'
import { rename } from 'fs/promises'

export const rn = async (filenames) => {
  const [rawPathToFile, newFileName] = filenames.split(',')
  const oldPathToFile = resolve(rawPathToFile)
  const newPathToFile = resolve(newFileName)
  await rename(oldPathToFile, newPathToFile)
}
