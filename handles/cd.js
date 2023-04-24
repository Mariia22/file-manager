import { chdir } from 'process'
import { moveUp } from './up.js'
import { homedir } from 'os'

export const changeDirectory = (path) => {
  switch (path) {
    case '..':
      moveUp()
      break
    case '~':
      chdir(homedir())
      break
    default:
      chdir(path)
  }
}
