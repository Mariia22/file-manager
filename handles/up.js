import { dirname, parse } from 'path'
import { chdir, cwd } from 'process'

export const moveUp = () => {
  const currentPath = cwd()
  const root = parse(currentPath).root
  currentPath === root ? chdir(root) : chdir(dirname(currentPath))
}
