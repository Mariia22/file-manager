import { dirname } from 'path'
import { cwd } from 'process'
import { readdir } from 'fs/promises';
import { sortByNameAcs } from '../helpers/helpers.js';

export const ls = async () => {
  const currentDirname = dirname(cwd())
  const files = await readdir(currentDirname, { withFileTypes: true })
  let directoryList = []
  let fileList = []
  files.forEach(file => file.isFile() ? fileList.push({ ...file, type: 'file' }) : directoryList.push({ ...file, type: 'directory' }))
  console.table([...sortByNameAcs(directoryList), ...sortByNameAcs(fileList)])
}
