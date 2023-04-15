import { resolve } from 'path'
import { open } from 'fs/promises'

export const addFile = async (fileName) => {
  const pathToFile = resolve(process.cwd(), fileName)
  let newFile
  newFile = await open(pathToFile, 'w')
  newFile.close()
}
