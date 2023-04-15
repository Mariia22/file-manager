import { cwd } from 'process'
import { readdir } from 'fs/promises';
import { sortByNameAcs } from '../helpers/helpers.js';

export const printList = async () => {
  const files = await readdir(cwd(), { withFileTypes: true })
  let directoryList = []
  let fileList = []
  files.forEach(file => file.isFile() ? fileList.push({ ...file, type: 'file' }) : directoryList.push({ ...file, type: 'directory' }))
  console.table([...sortByNameAcs(directoryList), ...sortByNameAcs(fileList)])
}
