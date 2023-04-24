import { unlink } from 'fs/promises'
import { resolve } from 'path'

export const deleteFile = async (path) => {
  const normalizePath = resolve(path)
  await unlink(normalizePath)
}
