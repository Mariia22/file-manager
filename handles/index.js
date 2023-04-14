import { finishProcess } from "../helpers/helpers.js"
import { cd } from "./cd.js"
import { ls } from "./ls.js"
import { up } from "./up.js"

export const commands = {
  'up': up,
  'cd': cd,
  'ls': ls,
  '.exit': finishProcess
}
