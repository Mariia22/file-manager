import { copyFile } from "./cp.js"
import { unlink } from 'fs/promises'
import { resolve } from 'path'

export const moveFile = async (paths) => {
  const [oldPath] = paths.split(',')
  const oldPathToFile = resolve(oldPath)
  await copyFile(paths)
  await unlink(oldPathToFile)
}
