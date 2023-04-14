import { dirname, parse } from 'path'
import { chdir, cwd } from 'process'
import { up } from './up.js'

export const cd = (path) => {
  if (path === '..') {
    up()
  } else {
    console.log(path)
  }
}
