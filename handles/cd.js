import { chdir } from 'process'
import { up } from './up.js'
import { homedir } from 'os'

export const cd = (path) => {
  switch (path) {
    case '..':
      up()
      break
    case '~':
      chdir(homedir())
      break
    default:
      chdir(path)
  }
}
